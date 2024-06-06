//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  GET_ALL_SPOKEN_LANGUAGES,
  GET_FEEDBACK_COMPLETED,
  GET_FEEDBACK_PENDING_COMPLETION,
  GET_SHOW_ALL_NOTIFICATIONS,
  GET_SHOW_PROFILE_DATA,
  GET_SHOW_SKILL_CATEGORY,
  IS_LOGIN,
} from '../../action/types';
import {userLogout} from '../../action/AuthAction';

const CustomDrawerContent = ({navigation}: any) => {
  const {navigate, goBack} = useNavigation();
  const dispatch = useDispatch();

  const signUp = useSelector(state => state.auth?.userData);

  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const ItemList = ({title, onPress}: any) => (
    <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
      <Text style={styles.listTitle}>{title}</Text>
    </TouchableOpacity>
  );

  const onPressHome = () => {
    navigation.navigate('Home', {screen: 'HomeStackNavigation'});
  };
  const onPressCredits = () => {
    navigation.navigate('TabNavigation', {screen: 'TopUpCredits'});
  };

  const onPressNotification = () => {
    navigation.navigate('TabNavigation', {screen: 'YourNotification'});
  };

  const onPressQrCode = () => {
    navigation.navigate('QrCode');
  };

  const onPressSettings = () => {
    navigation.navigate('TabNavigation', {
      screen: 'Settings',
      params: {
        screen: 'SettingsScreen',
      },
    });
  };

  const onPressFAQ = () => {
    navigation.navigate('TabNavigation', {screen: 'Faq'});
  };

  const onPressHelp = () => {
    navigation.navigate('TabNavigation', {screen: 'Help'});
  };

  const onPresslogOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const fcmToken = await AsyncStorage.getItem('fcmToken');

            let requestData = new FormData();
            requestData.append('device_token', fcmToken);
            const request = {
              params: {
                userToken: signUp?.token,
              },
              data: requestData,
              onSuccess: res => {
                AsyncStorage.removeItem('LOGIN_INFO');
                AsyncStorage.removeItem('fcmToken');
                dispatch({
                  type: IS_LOGIN,
                  payload: false,
                });
                dispatch({
                  type: GET_FEEDBACK_COMPLETED,
                  payload: {},
                });
                dispatch({
                  type: GET_FEEDBACK_PENDING_COMPLETION,
                  payload: [],
                });
                dispatch({
                  type: GET_SHOW_SKILL_CATEGORY,
                  payload: {},
                });
                dispatch({
                  type: GET_ALL_SPOKEN_LANGUAGES,
                  payload: {},
                });
                dispatch({
                  type: GET_SHOW_PROFILE_DATA,
                  payload: {},
                });
                dispatch({
                  type: GET_SHOW_ALL_NOTIFICATIONS,
                  payload: {},
                });
                setIsInitialLoading(false);
                console.log('res logout', res);
              },
              onFail: error => {
                setIsInitialLoading(false);
                console.log('error::::error', error);
                // Alert.alert(error?.data?.message || 'Something went to wrong!');
              },
            };

            dispatch(userLogout(request));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onPressBack = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <TouchableOpacity
        style={styles.backBtnContainer}
        onPress={() => onPressBack()}>
        <Image
          source={icons.backArrow}
          style={styles.backBtn}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={icons.skilliLogo}
          style={styles.skilliLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.itemListContainer}>
        <View>
          <ItemList title={'Home'} onPress={() => onPressHome()} />
          <ItemList title={'Skilli Credits'} onPress={onPressCredits} />
          <ItemList title={'Notifications'} onPress={onPressNotification} />
          <ItemList title={'Your Coach QR'} onPress={onPressQrCode} />
          <ItemList title={'Settings'} onPress={onPressSettings} />
          <ItemList title={'Help'} onPress={onPressHelp} />
          <ItemList title={'FAQ’s'} onPress={onPressFAQ} />
        </View>

        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => onPresslogOut()}>
          <Text style={styles.logOutTxt}>{'Log Out'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skilliDownContainer}>
        <Image
          source={icons.skilliDrawerLogo3x}
          style={styles.skilliLogo3}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  backBtnContainer: {
    width: wp(10),
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  backBtn: {
    height: wp(6),
    width: wp(6),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: hp(3),
  },
  skilliLogo: {
    height: wp(27.37),
    width: wp(77),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingBottom: wp(3),
  },
  userIcon: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(100),
  },
  userNameContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  userNameText: {
    color: colors.white,
    fontSize: fontSize(16),
    fontFamily: fontFamily.regular,
  },
  userPhoneNumber: {
    color: colors.white,
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: fontFamily.regular,
  },
  editProfileText: {
    color: colors.white,
    fontSize: fontSize(14),
    fontFamily: fontFamily.regular,
  },
  editProfileContainer: {
    marginTop: hp(2),
  },
  listItemContainer: {
    marginHorizontal: wp(8),
    marginTop: hp(1.3),
  },
  sourceIcon: {
    height: wp(5.33),
    width: wp(5.33),
    tintColor: colors.white,
  },
  listTitle: {
    color: colors.white,
    fontSize: fontSize(28),
    fontFamily: fontFamily.bold,
    textAlign: 'right',
  },
  modalContainer: {
    padding: hp(1),
    borderRadius: wp(2.67),
    backgroundColor: colors.white,
    marginHorizontal: wp(10.42),
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    width: wp(5.6),
    height: wp(5.6),
  },
  modalContentContainer: {
    margin: 0,
  },
  itemListContainer: {
    marginVertical: hp(3.5),
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: wp(3.7),
  },
  logOutBtn: {
    marginHorizontal: wp(11.5),
    marginBottom: hp(1),
  },
  logOutTxt: {
    fontSize: fontSize(30),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  skilliLogo3: {
    height: wp(70.58),
    width: wp(55),
  },
  skilliDownContainer: {
    position: 'absolute',
    bottom: wp(-0.3),
    left: wp(-0.3),
  },
});

export default CustomDrawerContent;
