import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import style from "./login.style";
import { icons } from "../../../helper/iconConstants";
import AuthButton from "../../../components/auth/AuthButton";
import AuthInputText from "../../../components/auth/AuthTextInput";
import { verifyEmail } from "../../../helper/Global";
import { useDispatch } from "react-redux";
import { loginWithEmailPassword } from "../../../action/AuthAction";
import CustomLoader from "../../../components/common/CustomLoader";
import PasswordInput from "../../../components/auth/PasswordInput";
import { IS_LOGIN, USER_INFO } from "../../../action/types";
import Spinner from "react-native-loading-spinner-overlay";
import messaging from "@react-native-firebase/messaging";

import {
  colors,
  fontFamily,
  notificationListener,
  requestUserPermission,
} from "../../../helper/utils";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }: any) => {
  // const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailWarnText, setEmailWarnText] = useState("");
  const [passwordWarnText, setpasswordWarnText] = useState("");
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  // useEffect(() => {
  //   const initialLoaderTimeout = setTimeout(() => {
  //     setIsInitialLoading(false);
  //   }, 500);

  //   return () => clearTimeout(initialLoaderTimeout);
  // }, []);

  const onChangeEmail = (text) => {
    clearText();
    setEmail(text);
  };

  const onChangePassword = (text) => {
    clearText();
    setPassword(text);
  };

  const clearText = () => {
    setEmailWarnText("");
    setpasswordWarnText("");
  };

  const onPressLogin = async () => {
    const fcmToken = await AsyncStorage.getItem("fcmToken");
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Validation Error", "Please enter both email and password");
    } else {
      setIsInitialLoading(true);
      let formData = new FormData();
      formData.append("email", email?.trim());
      formData.append("password", password?.trim());
      formData.append("device_token", fcmToken);
      const request = {
        data: formData,
        onSuccess: (res) => {
          setIsInitialLoading(false);

          dispatch({
            type: IS_LOGIN,
            payload: true,
          });
        },
        onFail: (error) => {
          setIsInitialLoading(false);
          console.log("error::::error", error);
          Alert.alert(error?.data?.message || "Something went to wrong!");
        },
      };
      console.log("request Login", request);
      dispatch(loginWithEmailPassword(request));
    }
    // }
  };

  const onPressForgotPswd = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <Spinner
          visible={isInitialLoading}
          textContent={"Please wait..."}
          textStyle={{
            color: colors.white,
          }}
        />
        <View style={style.logoContainer}>
          <Image
            source={icons.logo3x}
            style={style.logo}
            resizeMode="contain"
          />
        </View>

        <View style={style.emailContainer}>
          <AuthInputText
            title="Email"
            onChangeText={onChangeEmail}
            value={email}
            warnText={emailWarnText}
          />
        </View>
        <View style={style.passwordContainer}>
          <Text style={style.titleText}>{"Password"}</Text>
          <PasswordInput
            title="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <AuthButton
          title="Log in"
          containerStyle={style.btnContainer}
          textStyle={style.btnTxtStyle}
          onPress={onPressLogin}
        />
        <TouchableOpacity
          style={style.forgotPswdContainer}
          onPress={() => onPressForgotPswd()}
        >
          <Text style={style.forgotPswdTxt}>{"Forgot Password?"}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
