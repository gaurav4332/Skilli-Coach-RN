import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './selectFlow.style';
import {icons} from '../../../helper/iconConstants';
import AuthButton from '../../../components/auth/AuthButton';
import FloatingNextButton from '../../../components/auth/FloatingNextButton';

const OnBoarding = ({navigation}: any) => {
  // const {isLoginButton, isSignUpButton} = onBoardingController();
  const {navigate} = useNavigation();
  const {goBack} = useNavigation();

  const onPressSkillSeeker = () => {
    navigation.navigate('CreateAccount');
  };

  const onPressGoBack = () => {
    goBack();
  };

  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        style={style.backContainer}
        onPress={() => onPressGoBack()}>
        <Image
          source={icons.backArrow}
          style={style.backImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={style.logoContainer}>
        <Image source={icons.logo3x} style={style.logo} resizeMode="contain" />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.titleTxt}>{'I am a ..'}</Text>
      </View>
      <View style={style.btnContainer}>
        <AuthButton
          title="Coach"
          containerStyle={style.btncontainerStyle}
          onPress={() => onPressSkillSeeker()}
          textStyle={style.btnTxtStyle}
        />
        <View style={style.loginBtnContainer}>
          <AuthButton
            title="Skill Seeker"
            containerStyle={style.btncontainerStyle}
            onPress={() => onPressSkillSeeker()}
            textStyle={style.btnTxtStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OnBoarding;
