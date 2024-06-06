import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import style from './onBoarding.style';
import {icons} from '../../../helper/iconConstants';
import AuthButton from '../../../components/auth/AuthButton';

const OnBoarding = ({navigation}: any) => {
  const {navigate} = useNavigation();

  const onPressLogIn = () => {
    navigation.navigate('Login');
  };

  const onPressJoinNow = () => {
    navigation.navigate('SelectFlow');
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.logoContainer}>
        <Image source={icons.logo3x} style={style.logo} resizeMode="contain" />
      </View>
      <View style={style.btnContainer}>
        <AuthButton
          title="Log In"
          containerStyle={style.btncontainerStyle}
          onPress={() => onPressLogIn()}
          textStyle={style.btnTxtStyle}
        />
        <View style={style.loginBtnContainer}>
          <AuthButton
            title="Join Now"
            onPress={() => onPressJoinNow()}
            containerStyle={style.btncontainerStyle}
            textStyle={style.btnTxtStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OnBoarding;
