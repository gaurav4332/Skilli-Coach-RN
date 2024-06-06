import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import style from './settings.style';
import Header from '../../components/common/Header';
import SettingsTile from '../../components/common/SettingsTitle';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import TitleNextButton from '../../components/common/TitleNextButton';
import {hp, wp} from '../../helper/constants';
import Separator from '../../components/common/Separator';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCoachAccount} from '../../action/AuthAction';
import DeleteModal from '../../components/common/DeleteModal';
import {getProfileData} from '../../action/DataAction';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Settings() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signUp = useSelector(state => state.auth?.userData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      showProfile();
    }, []),
  );
  const showProfile = async () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        user_id: idAndToken || '',
      },
      onSuccess: (res: any) => {
        setIsInitialLoading(false);
      },
      onFail: (error: any) => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getProfileData(request));
    setIsInitialLoading(false);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const notificationCenter = () => {
    navigation.navigate('Notifications');
  };

  const payment = () => {
    navigation.navigate('Payment');
  };
  const termAndCondition = () => {
    navigation.navigate('TermAndCondition');
  };

  const editProfile = () => {
    navigation.navigate('EditProfile');
  };

  const privacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  // const onPressDelete = () => {
  //   Alert.alert(
  //     'Delete Account',
  //     'Are you sure you want to delete your account?',
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           console.log('Account deleted!');
  //           setIsInitialLoading(true);
  //           try {
  //             // let data = signUp?.user?.id;

  //             const requestData = new FormData();

  //             requestData.append('coachId', idAndToken);

  //             const request = {
  //               data: requestData,
  //               onSuccess: (res: any) => {
  //                 setIsInitialLoading(false);
  //                 // setModalVisible(true);
  //                 // goBack();
  //               },
  //               onFail: (error: any) => {
  //                 setIsInitialLoading(false);
  //                 // setModalVisible(true);
  //               },
  //             };
  //             dispatch(deleteCoachAccount(request));
  //           } catch (error) {
  //             console.error('Error fetching data:', error);
  //           }
  //         },
  //       },
  //     ],
  //   );
  // };

  const onPressDeleteOkBtn = () => {
    // console.log('Account deleted!');
    setIsInitialLoading(true);
    try {
      const requestData = new FormData();

      requestData.append('coachId', idAndToken);

      const request = {
        data: requestData,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
          setDeleteModal(false);

          console.log('====================================');
          console.log(res, 'resss delete::::>>>>>');
          console.log('====================================');

          // goBack();
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
          setDeleteModal(false);
          console.log('====================================');
          console.log(error, 'resss delete fail::::>>>>>');
          console.log('====================================');
        },
      };
      dispatch(deleteCoachAccount(request));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <Spinner visible={isInitialLoading} />
      <Header
        title={'Settings'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <View
        style={{
          marginHorizontal: wp(5),
          marginTop: hp(5),
        }}>
        <TitleNextButton
          title={'Notifications Centre'}
          onPress={() => notificationCenter()}
        />
        <TitleNextButton title={'Payment Method'} onPress={() => payment()} />
        <TitleNextButton title={'Edit Profile'} onPress={() => editProfile()} />
        <TitleNextButton
          title={'Terms & Conditions'}
          onPress={() => termAndCondition()}
        />
        <TitleNextButton
          title={'Privacy Policy'}
          onPress={() => privacyPolicy()}
        />
      </View>

      <View style={{marginVertical: hp(1.5)}}>
        <Separator />
      </View>

      <View
        style={{
          marginHorizontal: wp(5),
        }}>
        <TitleNextButton
          title={'Invite Friends'}
          onPress={() =>
            Linking.openURL(
              'sms:?body=Check out this skilli apps\n https://google.com ',
            )
          }
        />
      </View>

      <DeleteModal
        onClose={() => setDeleteModal(false)}
        isVisible={deleteModal}
        modalConetent={style.modalConetent}
        btnContainer={style.okBtnContainer}
        onButtonPress={() => onPressDeleteOkBtn()}
      />

      <TouchableOpacity
        style={{position: 'absolute', bottom: 40, right: wp(10)}}
        onPress={() => setDeleteModal(true)}>
        <Text
          style={{
            color: colors.lightGreen,
            fontSize: fontSize(17),
            fontFamily: fontFamily.medium,
          }}>
          {'Delete Account'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
