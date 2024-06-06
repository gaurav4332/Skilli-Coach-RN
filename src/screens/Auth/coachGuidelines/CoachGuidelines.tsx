import React, {useState} from 'react';
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
import style from './coachGuidelines.style';
import {icons} from '../../../helper/iconConstants';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../helper/utils';
import Separator from '../../../components/common/Separator';
import NextButton from '../../../components/auth/NextButton';
import BioTextInput from '../../../components/auth/BioTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {SIGNUP} from '../../../action/types';

export default function CoachGuidelines({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const signUpData = useSelector(state => state.data.signUp);

  const [cardContainers, setCardContainers] = useState([{id: 1}]);
  const [guideLines, setGuideLines] = useState('');

  const addMoreCardContainer = () => {
    const newId = cardContainers.length + 1;
    setCardContainers([...cardContainers, {id: newId}]);
  };

  const onChangeGuideLines = (text: any) => {
    setGuideLines(text);
  };

  const onPressNext = () => {
    if (guideLines.trim() === '') {
      // Alert.alert('Please set your GuideLines');
      navigation.navigate('UploadFiles');
    } else {
      // const guideLinesData = {
      //   requirements: guideLines,
      // };
      // dispatch({type: SIGNUP, payload: guideLinesData});
      navigation.navigate('UploadFiles');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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
          <View style={style.staticBarContainer}>
            <Image
              source={icons.SetYourSkilliRatesBar}
              style={style.staticBar1}
              resizeMode="contain"
            />
          </View>
          <View style={style.titleContainer}>
            <Text style={style.titleTxt}>{'Set your guidelines'}</Text>
          </View>

          <View style={style.bioContainer}>
            <View style={style.guidelinesContainer}>
              <TextInput
                style={style.textInput}
                multiline={true}
                value={guideLines}
                onChangeText={onChangeGuideLines}
                placeholder={
                  'List down the requirements you need in order to be able to give an accurate feedback'
                }
                placeholderTextColor={colors.white}
              />
            </View>
          </View>

          <NextButton
            title="Next"
            btnContainer={style.btnContainer}
            onPress={() => onPressNext()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
