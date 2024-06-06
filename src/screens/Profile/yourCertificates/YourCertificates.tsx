import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
  FlatList,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from '../yourCertificates/yourCertificates.style';
import Header from '../../../components/common/Header';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomSwitch from '../../../components/common/CustomSwitch';
import {icons} from '../../../helper/iconConstants';
import {useDispatch, useSelector} from 'react-redux';
import {hp, wp} from '../../../helper/constants';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
import {deleteCertificate, uploadCertificate} from '../../../action/AuthAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {SET_CERTIFICATES_DATA} from '../../../action/types';
import FastImage from 'react-native-fast-image';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

export default function YourCertificates({navigation}: any) {
  const route = useRoute();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const data = useSelector(state => state.data.profileData);
  const signUp = useSelector(state => state.auth.userData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);
  const certiiiiii = useSelector(state => state.data?.certificatesData);

  console.log(data, 'data?.coachesData?.certificates::;;::>>>>>>');

  const [editMode, setEditMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [demoCertificates, setDemoCertificates] = useState(
    data?.coachesData?.certificates,
  );
  const [newlyUploadedPDFs, setNewlyUploadedPDFs] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch({
        type: SET_CERTIFICATES_DATA,
        payload: data?.coachesData?.certificates,
      });
    }, []),
  );

  const onPressEdit = () => {
    setEditMode(!editMode);
    setSelectedItems([]);
  };

  const onPressClose = () => {
    setEditMode(false);
    setSelectedItems([]);
  };

  const isImageURL = (url: any) => {
    return url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;
  };

  const deleteItem = (url: any) => {
    setIsInitialLoading(true);

    const requestData = new FormData();

    requestData.append('url', url), requestData.append('coach_id', idAndToken);

    const request = {
      data: requestData,
      onSuccess: (res: any) => {
        setIsInitialLoading(false);
        setDemoCertificates(demoCertificates.filter(item => item !== url));
      },
      onFail: () => {
        setIsInitialLoading(false);
      },
    };
    dispatch(deleteCertificate(request));
  };

  const openDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      setIsInitialLoading(true);
      const requestData = new FormData();
      requestData.append('certificates[0]', {
        uri: result?.[0]?.uri,
        type: result?.[0]?.type,
        name: result?.[0]?.name,
      });

      const request = {
        params: {
          userId: idAndToken,
          userToken: signUp?.token,
        },
        data: requestData,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);

          setDemoCertificates(res?.data?.data?.allCertificates);
        },
        onFail: () => {
          setIsInitialLoading(false);
        },
      };
      dispatch(uploadCertificate(request));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  const pdfItem = (item, index) => {
    if (!item || !item) {
      return null;
    }
    const deleteButton = editMode ? (
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: -5,
          right: -5,
          padding: 5,
          borderRadius: 10,
          backgroundColor: colors.backgroundRed,
        }}
        onPress={() => deleteItem(item)}>
        <Image source={icons.close} style={{height: 10, width: 10}} />
      </TouchableOpacity>
    ) : null;

    if (item.toLowerCase().endsWith('.pdf')) {
      return (
        <View style={{position: 'relative'}}>
          {renderPdf(item)}
          {deleteButton}
        </View>
      );
    } else if (isImageURL(item)) {
      return (
        <View style={{position: 'relative'}}>
          {renderImage(item)}
          {deleteButton}
        </View>
      );
    } else {
      return null;
    }
  };

  const renderPdf = url => {
    return (
      <View style={style.pdfInnerView}>
        <Pdf
          trustAllCerts={Platform.OS === 'android' ? false : true}
          source={{
            uri: url,
            cache: true,
          }}
          onLoad={() => console.log('PDF loaded')}
          onError={error => console.log('Error while loading PDF', error)}
          style={{flex: 1}}
        />
      </View>
    );
  };

  const renderImage = (url: any) => {
    return (
      <View>
        <Image
          style={{
            width: 120,
            height: 100,
          }}
          source={{uri: url}}
        />
      </View>
    );
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };
  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Your Profile'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />

      <Spinner visible={isInitialLoading} />

      <ScrollView
        style={style.coachContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.hedaerDetailContainer}>
          <View style={style.profileDetails}>
            <Image
              source={{
                uri: data?.coachesData?.profile_image,
              }}
              style={style.profileImg}
              resizeMode="cover"
            />
          </View>

          <View style={style.coachNameTypeContainer}>
            <Text style={style.coachNameTxt}>
              {data?.coachesData?.name || ''}
            </Text>

            <Text style={style.coachTypeTxt}>
              {Object.values(data?.coachesData?.categories ?? '')?.[0] ?? ''}
            </Text>
          </View>
          {/* {showFees && ( */}
        </View>
        {/* )} */}

        <View style={style.certificateContainer}>
          <View>
            <Text style={style.certificateTxt}>{'Your Certificates'}</Text>
          </View>
          <TouchableOpacity
            style={style.certificateEditContainer}
            onPress={onPressEdit}>
            <Text style={style.editProfileTxt}>{'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={demoCertificates}
          renderItem={({item, index}) => (
            <View
              style={{
                justifyContent: 'space-between',
                marginHorizontal: wp(10),
                marginVertical: hp(2),
              }}>
              {pdfItem(demoCertificates[index])}
            </View>
          )}
          ListEmptyComponent={
            <View style={{marginVertical: hp(2)}}>
              <Text
                style={{
                  fontFamily: fontFamily.openSansBold,
                  fontSize: fontSize(18),
                  color: colors.darkBlue,
                }}>
                {'You not have a certificates'}
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          style={{marginTop: hp(1)}}
          contentContainerStyle={{
            alignItems: 'center',
          }}
        />

        <>
          <TouchableOpacity
            style={style.addMoreContainer}
            onPress={openDocumentPicker}>
            <Text style={style.addMoreTxt}>{'Add More'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.videoContainer}
            onPress={openDocumentPicker}>
            <Image
              source={icons.addIcon}
              style={style.addIcon}
              resizeMode="contain"
            />
            <Text style={style.explainerVideoTxt}>{'Upload Files'}</Text>
          </TouchableOpacity>
        </>
      </ScrollView>
    </View>
  );
}
