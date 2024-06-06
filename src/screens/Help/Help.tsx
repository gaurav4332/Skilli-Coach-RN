import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './help.style';

import Header from '../../components/common/Header';
import {useNavigation} from '@react-navigation/native';

import ProfileTextInput from '../../components/common/ProfileTextInput';

import {isEmpty} from 'lodash';
import NextButton from '../../components/auth/NextButton';
import {colors} from '../../helper/utils';
import {useDispatch} from 'react-redux';
import {verifyEmail} from '../../helper/Global';
import {sentContactus} from '../../action/AuthAction';

export default function Help({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const onPressSubmit = () => {
    if (isEmpty(name)) {
      Alert.alert('* Please enter name');
    } else if (isEmpty(email)) {
      Alert.alert('* Please enter email');
    } else if (!verifyEmail(email)) {
      Alert.alert('* Please enter a Valid Email');
    } else {
      setIsInitialLoading(true);
      let data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('comments', comments);
      const request = {
        data: data,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);

          console.log(res, 'ressssssss>>>>>>');
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
          // setModalVisible(true);
        },
      };
      dispatch(sentContactus(request));
    }
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const onPressBack = () => {
    goBack();
  };

  return (
    <View style={style.container}>
      <SafeAreaView />

      <Header
        title={'Help'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />

      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.midContainer}>
            <View style={style.contactusContainer}>
              <Text style={style.contactusTxt}>{'Contact Us'}</Text>
            </View>
            <ProfileTextInput
              placeholder={'Name'}
              textInputStyle={style.textInputStyle}
              onChangeText={text => setName(text)}
            />
            <ProfileTextInput
              placeholder={'Email'}
              textInputStyle={style.textInputStyle}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder={'Comments'}
              style={style.commentsTxtInputStyle}
              onChangeText={text => setComments(text)}
              placeholderTextColor={colors.darkBlue}
            />
          </View>
          <NextButton
            title={'Submit'}
            btnContainer={style.btnContainer}
            onPress={onPressSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
