import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import style from './skillImprove.style';
import {icons} from '../../../helper/iconConstants';
import AuthInputText from '../../../components/auth/AuthTextInput';
import {hp, wp} from '../../../helper/constants';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {GET_SHOW_SKILL_CATEGORY, SIGNUP} from '../../../action/types';
import {getSkillCategory} from '../../../action/DataAction';
import CustomLoader from '../../../components/common/CustomLoader';
import {colors} from '../../../helper/utils';

export default function SkillImprove({navigation}: any) {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [skillName, setSkillName] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [valueLanguage, setValueLanguage] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const signUp = useSelector(state => state.data.signUp);

  useEffect(() => {
    skillCategory();
  }, []);

  const filteredSkills = skillName.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const skillCategory = async () => {
    setIsInitialLoading(true);
    const request = {
      onSuccess: res => {
        console.log(res)
        const categoryNames = res?.category;
        setSkillName(categoryNames);
        console.log(categoryNames, 'ononSuccess resposes');
        setIsInitialLoading(false);
        dispatch({
          type: GET_SHOW_SKILL_CATEGORY,
          payload: res?.category,
        });
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getSkillCategory(request));
  };

  const toggleItemSelection = itemId => {
    // if (selectedItems.includes(itemId)) {
    //   setSelectedItems(selectedItems.filter(id => id !== itemId));
    // } else {
    //   setSelectedItems([...selectedItems, itemId]);
    // }

    setSelectedItems([itemId]);
  };

  console.log('====================================');
  console.log(selectedItems, 'selectedItem:::::>>>>>>');
  console.log('====================================');

  const onPressFindYourCoach = () => {
    if (selectedItems.length === 0) {
      Alert.alert(
        'Please select one skill',
        'You must select at least one skill before proceeding.',
      );
    } else {
      const selectedSport = {
        categories: selectedItems,
      };
      dispatch({type: SIGNUP, payload: selectedSport});
      navigation.navigate('UploadPhoto');
    }
  };

  const Item = ({skill, isSelected, onPress}: any) => (
    <TouchableOpacity
      style={[style.item, isSelected ? style.selectedItem : null]}
      onPress={onPress}>
      <Text
        style={[style.skillText, isSelected ? style.selectedSkillText : null]}
        numberOfLines={1}>
        {skill}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity style={style.backContainer} onPress={() => goBack()}>
        <Image
          source={icons.backArrow}
          style={style.backImg}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={style.logoContainer}>
        <Image source={icons.logo3x} style={style.logo} resizeMode="contain" />
      </View>
      <View style={style.staticBarContainer}>
        <Image
          source={icons.SportWantCoachBar}
          style={style.staticBar1}
          resizeMode="contain"
        />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.titleTxt}>{'What sport do you Coach?'}</Text>
      </View>
      <AuthInputText
        placeholder="Search"
        textInputStyle={style.textInputStyle}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      {isInitialLoading ? (
        <View style={style.container}>
          <ActivityIndicator
            size={'large'}
            style={{alignSelf: 'center', justifyContent: 'center', flex: 1}}
            color={colors.white}
          />
        </View>
      ) : (
        <FlatList
          data={filteredSkills}
          renderItem={({item}) => (
            <Item
              skill={item.name}
              isSelected={selectedItems.includes(item.id)}
              onPress={() => toggleItemSelection(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{marginTop: hp(1)}}
        />
      )}
      <NextButton
        title={'Next'}
        onPress={() => onPressFindYourCoach()}
        btnContainer={style.btnContainer}
      />
    </SafeAreaView>
  );
}
