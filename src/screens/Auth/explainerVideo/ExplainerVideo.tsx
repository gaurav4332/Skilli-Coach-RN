import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import style from './explainerVideo.style';
import {icons} from '../../../helper/iconConstants';
import NextButton from '../../../components/auth/NextButton';
import {REACT_APP_DEV_MODE} from '@env';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

export default function ExplainerVideo({navigation}: any) {
  const onPressSkip = () => {
    navigation.navigate('OnBoarding');
  };

  const requestNotificationPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
      if (result === RESULTS.GRANTED) {
        console.log('Notification permission granted');
      } else if (result === RESULTS.DENIED) {
        console.log('Notification permission denied');
        openSettings();
      } else {
        console.log('Notification permission denied or restricted');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestNotificationPermission();
    }
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.logoContainer}>
        <View />
        <View style={{marginLeft: 40}}>
          <Image
            source={icons.logo3x}
            style={style.logo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => onPressSkip()}>
          <Text style={style.skipBtn}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>

      <View style={style.videoContainer}>
        <Text style={style.explainerVideoTxt}>{'Explainer Video'}</Text>
        {/* <Text style={style.explainerVideoTxt}>{REACT_APP_DEV_MODE}</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
