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
import {icons} from '../../../helper/iconConstants';
import style from './BuySkilliCredits.style';
import {useNavigation} from '@react-navigation/native';
import {dataPricSkilliCredits} from '../../../helper/dataConstants';
import FloatingNextButton from '../../../components/auth/FloatingNextButton';

export default function BuySkilliCredits({navigation}: any) {
  const {goBack} = useNavigation();

  const [selectedPoints, setSelectedPoints] = useState(null);

  const onPressSelectedCredits = item => {
    setSelectedPoints(item);
  };

  const paymentMethod = () => {
    if (selectedPoints) {
      navigation.navigate('PaymentMethod', {selectedItem: selectedPoints});
    } else {
      Alert.alert('Please select credits');
    }
  };

  const onPressSkip = () => {
    navigation.navigate('PaymentMethod');
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => onPressSelectedCredits(item)}
      style={[
        style.outerItemContainer,
        selectedPoints === item ? style.selectedItem : null,
      ]}>
      <View style={style.midItemContainer}>
        <View style={style.itemPriceContainer}>
          <Text style={style.coachNameTxt}>{item.price}</Text>
        </View>

        <View style={style.innerItemContainer}>
          <Text style={style.coachTypeTxt}>{item.skilliPoints}</Text>
          <Text style={style.skilliCreditsTxt}>{'Skilli credits'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style.container}>
      <View style={style.upperBtnContainer}>
        <TouchableOpacity style={style.backContainer} onPress={() => goBack()}>
          <Image
            source={icons.backArrow}
            style={style.backImg}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSkip()}>
          <Text style={style.skipBtn}>{'Skip'}</Text>
        </TouchableOpacity>
      </View>

      <View style={style.logoContainer}>
        <Image source={icons.logo3x} style={style.logo} resizeMode="contain" />
      </View>
      <View style={style.staticBarContainer}>
        <Image
          source={icons.staticBar5}
          style={style.staticBar1}
          resizeMode="contain"
        />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.titleTxt}>{'Buy Skilli Credits'}</Text>
      </View>

      <View style={style.flatListContainer}>
        <FlatList
          bounces={true}
          data={dataPricSkilliCredits}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <FloatingNextButton title="Buy" onPress={() => paymentMethod()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
