import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/common/Header';
import {useNavigation} from '@react-navigation/core';
import style from './payment.style';
import {colors} from '../../helper/utils';
import Separator from '../../components/common/Separator';
import FloatingNextButton from '../../components/auth/FloatingNextButton';
import KeyboardAvoidScrollView from '../../components/common/KeyboardAvoidScrollView';
import {useDispatch, useSelector} from 'react-redux';
import {storeCoachBankDetails} from '../../action/AuthAction';

export default function Payment({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const bankDetails = useSelector(state => state.data.coachBankDetails);
  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const [nameValue, setNameValue] = useState(bankDetails?.name);
  const [bsb, setBsb] = useState(bankDetails?.bsb);
  const [accountNumber, setAccountNumber] = useState(
    bankDetails?.account_number,
  );
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const onPressSave = () => {
    if (nameValue === '') {
      Alert.alert('Please enter credits points');
    } else if (accountNumber === '') {
      Alert.alert('Please enter account number');
    } else if (bsb === '') {
      Alert.alert('Please enter bsb number');
    } else {
      setIsInitialLoading(true);
      let requestData = new FormData();
      requestData.append('coachId', idAndToken);
      requestData.append('name', nameValue);
      requestData.append('bsb', bsb);
      requestData.append('account_number', accountNumber);

      const request = {
        data: requestData,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
          // setModalVisible(false);
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
          // setModalVisible(false);
        },
      };
      dispatch(storeCoachBankDetails(request));
    }
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const onPressBack = () => {
    goBack();
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidScrollView>
        <Header
          title={'Payment'}
          rightContainer={style.rightContainer}
          onPressRightBtn={() => onPressRightBtn()}
          onPressBack={() => onPressBack()}
        />

        <View style={style.cardContainer}>
          <View style={style.titleContainer}>
            <Text style={style.titleTxt}>{'Your Bank Details'}</Text>
          </View>
          <TextInput
            style={style.input}
            placeholder="Name"
            placeholderTextColor={colors.darkBlue}
            value={nameValue}
            onChangeText={text => setNameValue(text)}
          />
          <TextInput
            style={style.input}
            placeholder="BSB"
            placeholderTextColor={colors.darkBlue}
            value={bsb}
            onChangeText={text => setBsb(text)}
            maxLength={6}
          />

          <TextInput
            style={style.input}
            placeholder="Account Number"
            placeholderTextColor={colors.darkBlue}
            keyboardType="number-pad"
            onChangeText={text => setAccountNumber(text)}
            value={accountNumber}
          />

          {/* <View style={style.rowContainer}>
            <TextInput
              style={[style.input, {width: '40%'}]}
              placeholder="Date"
              placeholderTextColor={colors.darkBlue}
            />
            <TextInput
              style={[style.input, {width: '40%'}]}
              placeholder="CVV"
              placeholderTextColor={colors.darkBlue}
            />
          </View> */}

          <TouchableOpacity style={[style.addMoreBtn]}>
            <Text style={style.nextTxt}>{'Change'}</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === 'android' && (
          <FloatingNextButton
            title={'Save'}
            btnContainer={style.btnContainer}
            onPress={onPressSave}
          />
        )}
      </KeyboardAvoidScrollView>
      {Platform.OS === 'ios' && (
        <FloatingNextButton title={'Save'} btnContainer={style.btnContainer} />
      )}
    </SafeAreaView>
  );
}
