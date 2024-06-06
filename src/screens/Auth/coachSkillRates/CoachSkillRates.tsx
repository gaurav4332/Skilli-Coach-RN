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
import style from './coachSkillRates.style';
import {icons} from '../../../helper/iconConstants';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../helper/utils';
import Separator from '../../../components/common/Separator';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch} from 'react-redux';
import {SIGNUP} from '../../../action/types';

export default function CoachSkillRates({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const [cardContainers, setCardContainers] = useState([{id: 1}]);
  const [inputFields, setInputFields] = useState([
    {skillName: '', rates: '10', dureation: '', discription: ''},
  ]);

  const addMoreCardContainer = () => {
    const newId = cardContainers.length + 1;
    setCardContainers([...cardContainers, {id: newId}]);
    setInputFields([
      ...inputFields,
      {skillName: '', rates: '10', dureation: '', discription: ''},
    ]);
  };

  const onChangeSkillName = (text: any, index: number) => {
    const newInputFields = [...inputFields];
    newInputFields[index].skillName = text;
    setInputFields(newInputFields);
  };

  const onChangeDureation = (text, index) => {
    if (text === '') {
      const newInputFields = [...inputFields];
      newInputFields[index].dureation = '';
      setInputFields(newInputFields);
    } else {
      const inputNumber = parseInt(text);

      if (!isNaN(inputNumber)) {
        const newInputFields = [...inputFields];
        newInputFields[index].dureation = inputNumber.toString();
        setInputFields(newInputFields);
      }
    }
  };

  const onChangeDescription = (text: any, index: number) => {
    const newInputFields = [...inputFields];
    newInputFields[index].discription = text;
    setInputFields(newInputFields);
  };

  const collectDataToSend = () => {
    const allData = {
      cardContainers: cardContainers.map((container, index) => ({
        id: container.id,
        ...inputFields[index],
      })),
    };
    return allData;
  };

  const onPressNext = () => {
    const isAnyFieldEmpty = inputFields.some(
      field =>
        field.skillName.trim() === '' ||
        field.dureation.trim() === '' ||
        field.discription.trim() === '',
    );
    if (isAnyFieldEmpty) {
      Alert.alert('Please fill in all details');
    } else {
      const allData = collectDataToSend();

      dispatch({type: SIGNUP, payload: allData});
      // navigation.navigate('CoachGuidelines');
      navigation.navigate('ChildrenCheck');
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
            <Text style={style.titleTxt}>{'Set your Skilli Rates'}</Text>
            <View style={style.innerTitleContainer}>
              <Text style={style.innerTitleTxt} numberOfLines={3}>
                {
                  'Set rates with the app’s 10% earnings retention in mind, ensuring transparency and fair payment.'
                }
              </Text>
            </View>
          </View>

          {cardContainers.map((container, index) => (
            <View key={container.id} style={style.cardContainer}>
              <View style={style.rowContainer}>
                {/* <TextInput
                  style={[style.input, {width: '45%'}]}
                  placeholder="Name"
                  placeholderTextColor={colors.white}
                  onChangeText={text => onChangeSkillName(text, index)}
                  value={inputFields[index].skillName}
                />
                <TextInput
                  style={[style.ratesInput, {width: '45%'}]}
                  placeholder="Rates"
                  placeholderTextColor={colors.lightGreen}
                  onChangeText={text => onChangeRates(text, index)}
                  value={inputFields[index].rates}
                  keyboardType="number-pad"
                  maxLength={4}
                /> */}
                <TextInput
                  style={style.input}
                  placeholder="Session Name"
                  placeholderTextColor={colors.white}
                  onChangeText={text => onChangeSkillName(text, index)}
                  value={inputFields[index].skillName}
                />
              </View>
              <TextInput
                style={style.input}
                placeholder="Duration (in minutes)"
                placeholderTextColor={colors.white}
                onChangeText={text => onChangeDureation(text, index)}
                value={inputFields[index].dureation}
                keyboardType="numeric"
                // maxLength={3}
              />
              <TextInput
                style={style.feedBackInput}
                placeholder="Feedback Description"
                placeholderTextColor={colors.white}
                onChangeText={text => onChangeDescription(text, index)}
                value={inputFields[index].discription}
                multiline={true}
              />
              <View style={style.separator}>
                <View style={style.separatorLine} />
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={style.addMoreBtn}
            onPress={addMoreCardContainer}>
            <Image
              source={icons.addIcon}
              style={style.addIcon}
              resizeMode="contain"
            />
            <Text style={style.addMoreTxt}>{'Add More'}</Text>
          </TouchableOpacity>

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
