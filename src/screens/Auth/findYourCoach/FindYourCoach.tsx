import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './findYourCoach.style';
import {icons} from '../../../helper/iconConstants';
import AuthInputText from '../../../components/auth/AuthTextInput';
import {useNavigation} from '@react-navigation/native';
import {dataCoach} from '../../../helper/dataConstants';
import FloatingNextButton from '../../../components/auth/FloatingNextButton';
import NextButton from '../../../components/auth/NextButton';

export default function FindYourCoach({navigation}: any) {
  const {goBack} = useNavigation();

  const [selectedCoach, setSelectedCoach] = useState(null);

  const onPressNext = () => {
    if (selectedCoach) {
      navigation.navigate('BuySkilliCredits');
    } else {
      Alert.alert('Alert', 'Please select a coach before proceeding.');
    }
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => setSelectedCoach(item)}
      style={[
        style.outerItemContainer,
        selectedCoach === item ? style.selectedItem : null,
      ]}>
      <View style={style.midItemContainer}>
        <Image source={item.img} style={style.coachImg} />
        <View style={style.innerItemContainer}>
          <Text style={style.coachNameTxt}>{item.coachName}</Text>
          <Text style={style.coachTypeTxt}>{item.coachType}</Text>
        </View>
      </View>
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
          source={icons.staticBar4}
          style={style.staticBar1}
          resizeMode="contain"
        />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.titleTxt}>{'Find your coach'}</Text>
      </View>
      <AuthInputText
        placeholder="Search"
        textInputStyle={style.textInputStyle}
      />

      <View style={style.flatListContainer}>
        <FlatList
          bounces={true}
          data={dataCoach}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View>
          <NextButton
            title={'Next'}
            onPress={() => onPressNext()}
            btnContainer={style.btnContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
