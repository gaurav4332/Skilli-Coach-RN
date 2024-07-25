import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import style from './uploadFiles.style';
import {icons} from '../../../helper/iconConstants';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {IS_LOGIN, SET_CERTIFICATES_DATA, SIGNUP} from '../../../action/types';
import {signUpWithEmailPassword} from '../../../action/AuthAction';

import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, fontSize} from '../../../helper/utils';

export default function UploadFiles({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const signUp = useSelector(state => state.data.signUp);

  const certificatesDatassss = useSelector(
    state => state.data.certificatesData,
  );

  const [pickedDocument, setPickedDocument] = useState<any>('');
  const [certificates, setCertificates] = useState([]);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isUploaded, setIsuploaded] = useState(false);

  const upload = async () => {
    setIsInitialLoading(true);
    const fcmToken = await AsyncStorage.getItem('fcmToken');

    const requestData = new FormData();
    requestData.append('name', signUp.name);
    requestData.append('password', signUp.password);
    requestData.append('email', signUp?.email);
    requestData.append('phone', signUp?.phone);
    requestData.append('languages_spoken[0]', signUp.languages_spoken);
    requestData.append('social_facebook', signUp?.social_facebook);
    requestData.append('social_instagram', signUp?.social_instagram);
    requestData.append('gender', signUp.gender);
    requestData.append('dob', signUp?.dob);
    signUp?.categories.map((element: any, index: number) => {
      requestData.append(`categories[${index}]`, JSON.stringify(element));
    });
    requestData.append('requirements', 'ferfgfg');
    requestData.append('country_code', signUp?.country_code);

    requestData.append(
      'bioData[general_information]',
      signUp.general_information,
    );
    requestData.append('bioData[club_memberships]', signUp.club_memberships);
    requestData.append(
      'bioData[coaching_interests]',
      signUp.coaching_interests,
    );
    requestData.append('bioData[quote]', signUp.quote);
    requestData.append(
      'skillRate[name]',
      signUp.cardContainers?.[0]?.skillName,
    );
    requestData.append('skillRate[rates]', signUp.cardContainers?.[0]?.rates);
    requestData.append(
      'skillRate[feedback_duration]',
      signUp.cardContainers?.[0]?.dureation,
    );
    requestData.append(
      'skillRate[feedback_description]',
      signUp.cardContainers?.[0]?.discription,
    );

    requestData.append('profile_picture', {
      uri: signUp?.selectedImage?.uri,
      type: signUp?.selectedImage?.type,
      name: signUp?.selectedImage?.fileName,
    });

    if (signUp?.bio_video !== null) {
      requestData.append('bioData[bio_video]', {
        uri: signUp?.bio_video?.uri,
        type: signUp?.bio_video?.type,
        name: signUp?.bio_video?.fileName,
      });
    }
    requestData.append(
      'insurance[insurance]',
      signUp?.checkInsuranceCertificate,
    );

    if (signUp?.checkInsuranceCertificate === 'yes') {
      requestData.append(
        'insurance[insurance_number]',
        signUp?.insuranceNumber,
      );

      requestData.append(
        'insurance[insurance_expire_date]',
        signUp?.insuranceDate,
      );
      signUp?.insuranceCertificates.map((element: any, index: number) => {
        const data = {
          name: element.fileName,
          uri: element.uri,
          type: element.type,
        };

        requestData.append(`insurance[insurance_document][${index}]`, data);
      });
    }

    requestData.append(
      'children_card[children_card]',
      signUp?.checkChildrenCard,
    );

    if (signUp?.checkChildrenCard === 'yes') {
      requestData.append(
        'children_card[children_card_number]',
        signUp?.childrenCardNumber,
      );

      requestData.append(
        'children_card[children_card_expire_date]',
        signUp?.childrenCardExpiryDate,
      );
      requestData.append(
        'children_card[children_card_document]',

        {
          name: signUp?.childrenCardCertificates?.[0]?.fileName,
          uri: signUp?.childrenCardCertificates?.[0]?.uri,
          type: signUp?.childrenCardCertificates?.[0]?.type,
        },
      );
    }
    requestData.append('device_token', fcmToken);

    // signUp?.childrenCardCertificates.map((element: any, index: number) => {
    //   const data = {
    //     name: element.fileName,
    //     uri: element.uri,
    //     type: element.type,
    //   };

    //   requestData.append(`children_card[children_card_document]`, data);
    // });

    certificatesDatassss?.certificates.map((element: any, index: number) => {
      const data = {
        name: element.fileName,
        uri: element.uri,
        type: element.type,
      };
      requestData.append(`bioData[certificates][${index}]`, data);
    });

    const request = {
      data: requestData,
      onSuccess: res => {
        setIsInitialLoading(false);

        dispatch({
          type: IS_LOGIN,
          payload: true,
        });
      },
      onFail: error => {
        setIsInitialLoading(false);
        console.log('error::::error', error);
      },
    };

    dispatch(signUpWithEmailPassword(request));
  };

  const openDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: [DocumentPicker.types.pdf],
      });

      let updatedCertificates = result.map(
        (result: {uri: any; type: any; name: any}) => {
          return {
            uri: result.uri,
            type: result.type,
            fileName: result.name,
          };
        },
      );

      setCertificates(updatedCertificates);
      const certificatesData = {
        certificates: updatedCertificates,
      };
      dispatch({type: SET_CERTIFICATES_DATA, payload: certificatesData});
      setIsuploaded(true);
      Alert.alert('Success', 'File was uploaded successfully');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Spinner
        visible={isInitialLoading}
        textContent={'Please wait for some time...'}
        textStyle={styles.spinnerTextStyle}
      />
      <TouchableOpacity style={style.backContainer} onPress={() => goBack()}>
        <Image
          source={icons.backArrow}
          style={style.backImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={style.logoContainer}>
        <Image source={icons.logo3x} style={style.logo} resizeMode="contain" />
      </View>
      <View style={style.staticBarContainer}>
        <Image
          source={icons.uploadDocumentsBar}
          style={style.staticBar1}
          resizeMode="contain"
        />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.titleTxt}>
          {'Upload Qualifications,\nCertificates & Achievements'}
        </Text>
      </View>
      {isUploaded ? (
        <TouchableOpacity
          style={style.videoContainer}
          onPress={() => openDocumentPicker()}>
          <Text style={style.explainerVideoTxt}>{'Successfully Uploaded'}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={style.videoContainer}
          onPress={() => openDocumentPicker()}>
          <Image
            source={icons.addIcon}
            style={style.addIcon}
            resizeMode="contain"
          />

          <Text style={style.explainerVideoTxt}>{'Upload Files'}</Text>
        </TouchableOpacity>
      )}

      <NextButton
        title="Next"
        btnContainer={style.btnContainer}
        onPress={() => upload()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: colors.white,
    fontSize: fontSize(20),
  },
});
