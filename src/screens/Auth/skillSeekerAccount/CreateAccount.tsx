import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

import style from './createAccount.style';
import {icons} from '../../../helper/iconConstants';

import DetailsTextInput from '../../../components/auth/DetailsTextInput';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';
import {Dropdown} from 'react-native-element-dropdown';
import {dataGender, dataLanguages} from '../../../helper/dataConstants';
import NextButton from '../../../components/auth/NextButton';
import DatePicker from 'react-native-date-picker';
import PasswordInput from '../../../components/auth/PasswordInput';
import {verifyEmail, verifyMobileNumber} from '../../../helper/Global';
import {useDispatch, useSelector} from 'react-redux';
import {SIGNUP} from '../../../action/types';
import {getSpokenLanguages} from '../../../action/DataAction';
import {CountryPicker} from 'react-native-country-codes-picker';

const CreateAccount = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [name, setName] = useState('');
  const [nameWarnText, setNameWarnText] = useState('');
  const [email, setEmail] = useState('');
  const [emailWarnText, setEmailWarnText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneWarnText, setPhoneWarnText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordWarnText, setPasswordWarnText] = useState('');
  const [valueGender, setValueGender] = useState(null);
  const [valueLanguage, setValueLanguage] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateWarnText, setDateWarnText] = useState('');
  const [showDOB, setShowDOB] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+61');
  const [countryFlag, setCountryFlag] = useState('🇦🇺');
  const [show, setShow] = useState(false);

  // useEffect(
  //   React.useCallback(() => {
  //     showLanguages();
  //   }, []),
  // );

  // const showLanguages = async () => {
  //   setIsInitialLoading(true);
  //   const request = {
  //     params: {
  //       // user_id: userData?.student?.id || '',
  //       // token: userData?.token,
  //     },
  //     onSuccess: (res: any) => {
  //       console.log('====================================');
  //       console.log(res, 'Languages res:::::>>>>>>>>');
  //       console.log('====================================');
  //       setIsInitialLoading(false);
  //     },
  //     onFail: () => {
  //       console.log('Fail');
  //       setIsInitialLoading(false);
  //     },
  //   };
  //   dispatch(getSpokenLanguages(request));
  //   setIsInitialLoading(false);
  // };

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const toggleDatePicker = () => {
    setOpen(!open);
  };

  const handleDateChange = newDate => {
    setSelectedDate(newDate);
    setShowDOB(false);
    setOpen(false);
  };

  const onChangeName = text => {
    clearText();
    setName(text);
  };

  const onChangeEmail = text => {
    clearText();
    setEmail(text);
  };
  const onChangePhoneNumber = text => {
    clearText();
    setPhoneNumber(text);
  };

  const onChangePassword = text => {
    clearText();
    setPassword(text);
  };

  const clearText = () => {
    setNameWarnText('');
    setEmailWarnText('');
    setPhoneWarnText('');
    setPasswordWarnText('');
  };

  const onPressSkillSeeker = () => {
    const today = new Date();
    const minimumDOB = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );

    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Please fill out all fields');
    } else if (!verifyEmail(email)) {
      Alert.alert('Please enter a valid email');
    } else if (!phoneNumber) {
      Alert.alert('Please enter a phone number');
    } else if (password.trim() === '') {
      Alert.alert('Please enter a password');
    } else if (valueGender === null) {
      Alert.alert('Please select Gender');
    } else if (selectedDate === null) {
      Alert.alert('Please select DOB');
    } else if (selectedDate > minimumDOB) {
      Alert.alert('You must be over 18 to sign up');
    } else if (valueLanguage === null) {
      Alert.alert('Please select language');
    } else {
      const allData = {
        name: name.trim(),
        email: email?.trim(),
        phone: `${phoneNumber.trim()}`,
        password: password?.trim(),
        gender: valueGender,
        dob: formatDate(selectedDate),
        languages_spoken: valueLanguage,
        country_code: countryCode,
      };
      dispatch({type: SIGNUP, payload: allData});
      navigation.navigate('SkillImprove');
    }
  };

  return (
    <>
      <View style={style.container}>
        <SafeAreaView />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'position'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
          <TouchableOpacity
            style={style.backContainer}
            onPress={() => goBack()}>
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

          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={style.staticBarContainer}>
              <Image
                source={icons.CreateAccountBar}
                style={style.staticBar1}
                resizeMode="contain"
              />
            </View>
            <View style={style.titleContainer}>
              <Text style={style.titleTxt}>{'Create COACH Account'}</Text>
            </View>
            <View style={style.emailContainer}>
              <DetailsTextInput
                placeholder="Name"
                onChangeText={onChangeName}
                value={name}
                warnText={nameWarnText}
              />
              <DetailsTextInput
                placeholder="Email"
                onChangeText={onChangeEmail}
                value={email}
                warnText={emailWarnText}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: hp(0.3),
                  alignItems: 'center',
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  style={{
                    width: '30%',
                    height: 54,
                    justifyContent: 'center',
                    backgroundColor: colors.inputBackground,
                    paddingHorizontal: wp(2),
                    alignItems: 'center',
                    borderRadius: wp(4),
                    //   padding: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: fontSize(17),
                      fontFamily: fontFamily.openSansBold,
                    }}>
                    {countryFlag} {countryCode}
                  </Text>
                </TouchableOpacity>

                <CountryPicker
                  show={show}
                  pickerButtonOnPress={item => {
                    setCountryCode(item.dial_code);
                    setCountryFlag(item.flag);
                    setShow(false);
                  }}
                  onBackdropPress={() => setShow(false)}
                  style={{
                    modal: {
                      height: Platform.OS === 'ios' ? '65%' : '70%',
                      // backgroundColor: 'red',
                    },
                    countryName: {
                      color: '#000',
                    },
                    dialCode: {
                      color: '#000',
                    },
                    flag: {
                      color: '#000',
                    },
                  }}
                />

                {/* <AuthCountryPicker
                  selectedCountry={selectedCountry}
                  onSelectCountryPicker={country => {
                    setSelectedCountry(country?.callingCode);
                    setCountryFlag(country?.flag);
                  }}
                /> */}
                {/* <CountryCodes /> */}
                <TextInput
                  placeholder="Phone Number"
                  style={{
                    fontSize: fontSize(16),
                    color: colors.white,
                    backgroundColor: colors.inputBackground,
                    paddingVertical: hp(1.7),
                    borderRadius: wp(3.5),
                    paddingLeft: wp(4),
                    fontFamily: fontFamily.bold,
                    marginVertical: hp(0.5),
                    width: '65%',
                  }}
                  onChangeText={onChangePhoneNumber}
                  value={phoneNumber}
                  placeholderTextColor={colors.white}
                  keyboardType="numeric"
                  maxLength={15}
                />
                {/* <DetailsTextInput
                  placeholder="Phone Number"
                  onChangeText={onChangePhoneNumber}
                  value={phoneNumber}
                  maxLength={10}
                  keyboardType={'numeric'}
                  warnText={phoneWarnText}
                /> */}
              </View>
              <PasswordInput
                placeholder="Password"
                value={password}
                onChangeText={onChangePassword}
              />
            </View>
            <View style={style.dropDownMainContainer}>
              <Dropdown
                style={style.dropDownGender}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                iconStyle={style.iconStyle}
                itemTextStyle={{color: colors.black}}
                data={dataGender}
                maxHeight={300}
                labelField="label"
                placeholder={'Gender'}
                valueField="value"
                value={valueGender}
                onChange={item => {
                  setValueGender(item.value);
                }}
                renderRightIcon={() => (
                  <Image
                    source={icons.downArrow}
                    style={style.downArrowImg}
                    resizeMode="contain"
                  />
                )}
              />
              <TouchableOpacity
                style={style.dropDownContainer}
                onPress={toggleDatePicker}>
                <View style={style.genderContainer}>
                  <Text style={style.dropDownTitltTxt}>
                    {showDOB ? 'DOB' : formatDate(selectedDate)}
                  </Text>
                </View>
              </TouchableOpacity>
              <DatePicker
                mode="date"
                modal
                open={open}
                date={selectedDate || new Date()}
                onConfirm={handleDateChange}
                onCancel={() => setOpen(false)}
                maximumDate={new Date()}
              />
            </View>
            <View style={style.preferredLanguage}>
              <Dropdown
                style={style.dropdown}
                placeholderStyle={style.placeholderStyle}
                selectedTextStyle={style.selectedTextStyle}
                inputSearchStyle={style.inputSearchStyle}
                itemTextStyle={{color: colors.black}}
                iconStyle={style.iconStyle}
                // data={allLanguages?.map(language => ({
                //   label: language,
                //   value: language,
                // }))}
                data={dataLanguages?.map(language => ({
                  label: language,
                  value: language,
                }))}
                maxHeight={160}
                // minHeight={500}
                valueField="value"
                labelField="label"
                placeholder={'Languages Spoken'}
                itemTextStyle={{color: colors.black}}
                value={valueLanguage}
                onChange={item => {
                  setValueLanguage(item.value);
                }}
                renderRightIcon={() => (
                  <Image
                    source={icons.downArrow}
                    style={style.downArrowImg}
                    resizeMode="contain"
                  />
                )}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <View style={style.bottomContainer}>
          <View style={style.warnTitleContainer}>
            <Text style={style.warnTxt}>You must be over 18 to sign up</Text>
          </View>
          <NextButton
            title={'Next'}
            onPress={() => onPressSkillSeeker()}
            btnContainer={style.nextBtnContainer}
          />
        </View>
      </View>
    </>
  );
};

export default CreateAccount;
