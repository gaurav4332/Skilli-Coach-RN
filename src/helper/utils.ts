import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import notifee from '@notifee/react-native';

export const navigationRef = createNavigationContainerRef();

export const colors = {
  white: '#F5F5F5',
  black: '#000',
  backgroundRed: '#ED1C28',
  inputBackground: 'rgb(249,80,94)',
  lightGreen: '#87D0C8',
  darkBlue: '#043856',
  lightGrey: 'rgb(229,232,233)',
  lightBlue: 'rgba(4,56,86,0.51 )',
  inputGrey: 'rgba(43,80,101,0.06 )',
  minorGreen: 'rgba(217,233,232,1)',
  greenies: 'rgb(200,230,226)',
};

export const fontFamily = {
  regular: 'OpenSans-Regular',
  medium: 'OpenSans-Medium',
  bold: 'OpenSans-Bold',
  extraBold: 'Inter-ExtraBold',
  semiBold: 'Inter-SemiBold',
  openSansMedium: 'OpenSans-Regular',
  openSansBold: 'OpenSans-SemiBold',
  openSansRegular: 'OpenSans-Regular',
  openSansExtraBold: 'OpenSans-ExtraBold',
};

export const fontSize = val => RFValue(val, 850);

export const hexToRgb = hex => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16,
      )})`
    : null;
};

const navigationCheck = (moveCallback: () => void): void => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

export const navigationWithParam = (
  routeName: string,
  params = {},
  merge: boolean = false,
): void => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
      merge,
    });
    navigationRef.dispatch(navigateAction);
  });
};

export const requestUserPermission = async (): Promise<void> => {
  const authStatus = await messaging().requestPermission();
  await messaging().requestPermission({providesAppNotificationSettings: true});
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFCMToken();
  }
};

const getFCMToken = async (): Promise<void> => {
  const fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('====================================');
  console.log(fcmToken, 'generatefcmToken::>>>>>>');
  console.log('====================================');

  if (!fcmToken) {
    try {
      const generatefcmToken = await messaging().getToken();
      console.log('====================================');
      console.log(generatefcmToken, 'generatefcmToken');
      console.log('====================================');
      if (generatefcmToken) {
        await AsyncStorage.setItem('fcmToken', generatefcmToken);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const notificationListener = async (): Promise<void> => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(remoteMessage);
  });

  // messaging().onMessage(remoteMessage => {
  //   console.log(remoteMessage);
  // });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: remoteMessage?.notification?.title,
      body: remoteMessage?.notification?.body,
      android: {
        channelId,
      },
    });
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(remoteMessage);
      }
    });
};
