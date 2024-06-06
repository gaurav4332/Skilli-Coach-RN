import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthButton from '../../../components/auth/AuthButton';
import AuthInputText from '../../../components/auth/AuthTextInput';
import KeyboardAvoidScrollView from '../../../components/common/KeyboardAvoidScrollView';
import {icons} from '../../../helper/iconConstants';
import style from './forgotPassword.style';
import PasswordInput from '../../../components/auth/PasswordInput';
import {wp} from '../../../helper/constants';
import {useDispatch} from 'react-redux';
import {forgotPassword} from '../../../action/AuthAction';
import {verifyEmail} from '../../../helper/Global';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({navigation}: any) => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailWarnText, setEmailWarnText] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const onPressBack = () => {
    goBack();
  };

  const onChangeEmail = text => {
    clearText();
    setEmail(text);
  };

  const onChangePassword = (text: any) => {
    setPassword(text);
  };

  const onChangeConfirmPswd = (text: any) => {
    setConfirmPassword(text);
  };

  const clearText = () => {
    setEmailWarnText('');
  };
  const onPressConfirm = () => {
    if (email.trim() === '') {
      Alert.alert('Validation Error', 'Please enter both email');
    } else if (!verifyEmail(email)) {
      Alert.alert('Please enter valid email');
    } else if (password !== confirmPassword) {
      Alert.alert(
        'Password Mismatch',
        'Passwords do not match. Please re-enter.',
      );
    } else {
      setIsInitialLoading(true);
      let formData = new FormData();
      formData.append('email', email?.trim());
      formData.append('password', password?.trim());
      formData.append('password_confirmation', confirmPassword?.trim());
      const request = {
        data: formData,
        onSuccess: res => {
          setIsInitialLoading(false);
          Alert.alert(
            'We have e-mailed your password reset link!',
            '',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('Login');
                },
              },
            ],
            {cancelable: false},
          );
        },
        onFail: error => {
          console.log('error::::error', error);
          Alert.alert('Error', error?.data?.message || 'Something went wrong!');
          setIsInitialLoading(false);
        },
      };
      console.log('request Login', request);
      dispatch(forgotPassword(request));
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <Spinner visible={isInitialLoading} />
        <TouchableOpacity
          style={style.backContainer}
          onPress={() => onPressBack()}>
          <Image
            source={icons.backArrow}
            style={style.backImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={style.logoContainer}>
          <Image
            source={icons.logo3x}
            style={style.logo}
            resizeMode="contain"
          />
        </View>

        <View style={{marginHorizontal: wp(5.5)}}>
          <Text style={style.titleTxt}>{'Forgot Password?'}</Text>
        </View>

        <View style={style.titleContainer}>
          <AuthInputText
            title="Email"
            containerStyle={style.textInput}
            onChangeText={onChangeEmail}
            value={email}
            warnText={emailWarnText}
          />
          <View style={style.passwordContainer}>
            <Text style={style.titleText}>{'Password'}</Text>
            <PasswordInput
              title="Password"
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry
            />
          </View>
          <View style={style.passwordContainer}>
            <Text style={style.titleText}>{'Confirm New Password'}</Text>
            <PasswordInput
              title="Confirm New Password"
              onChangeText={onChangeConfirmPswd}
              value={confirmPassword}
              secureTextEntry
            />
          </View>
        </View>

        <AuthButton
          title="Confirm"
          containerStyle={style.btnContainer}
          textStyle={style.btnTxtStyle}
          onPress={() => onPressConfirm()}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
