import {
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
import style from './paymentMethod.style';
import {icons} from '../../../helper/iconConstants';

import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import Separator from '../../../components/common/Separator';
import AuthInputText from '../../../components/auth/AuthTextInput';
import {hp, wp} from '../../../helper/constants';
import DetailsTextInput from '../../../components/auth/DetailsTextInput';
import FloatingNextButton from '../../../components/auth/FloatingNextButton';
import {colors} from '../../../helper/utils';

export default function PaymentMethod({navigation}: any) {
  const {goBack} = useNavigation();
  const route = useRoute();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const selectedItem = route.params?.selectedItem;

  const onPressPaymentMethod = () => {
    navigation.navigate('DrawerNavigation');
  };

  const onPressSkip = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={style.upperBtnContainer}>
          <TouchableOpacity
            style={style.backContainer}
            onPress={() => goBack()}>
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

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={style.logoContainer}>
              <Image
                source={icons.logo3x}
                style={style.logo}
                resizeMode="contain"
              />
            </View>
            <View style={style.staticBarContainer}>
              <Image
                source={icons.staticBar6}
                style={style.staticBar1}
                resizeMode="contain"
              />
            </View>
            <View style={style.titleContainer}>
              <Text style={style.titleTxt}>{'Payment Method'}</Text>
            </View>
            <View style={[style.outerItemContainer]}>
              <View style={style.midItemContainer}>
                <View style={style.itemPriceContainer}>
                  <Text style={style.coachNameTxt}>
                    {selectedItem ? selectedItem.price : 'None selected'}
                  </Text>
                </View>
                <View style={style.innerItemContainer}>
                  <Text style={style.coachTypeTxt}>
                    {selectedItem ? selectedItem.skilliPoints : ''}
                  </Text>
                  <Text style={style.skilliCreditsTxt}>
                    {selectedItem ? 'Skill credits' : ''}
                  </Text>
                </View>
              </View>
            </View>
            <Separator />

            <View style={style.cardDetailsContainer}>
              <DetailsTextInput placeholder="Name on Card" />
              <DetailsTextInput
                placeholder="Card Number"
                keyboardType={'numeric'}
              />

              <View style={style.expAndCvvContainer}>
                <DetailsTextInput
                  placeholder="Expire date"
                  textInputStyle={style.textInputStyle}
                  keyboardType={'numeric'}
                />
                <DetailsTextInput
                  placeholder="CVV"
                  textInputStyle={style.cvvTextInputStyle}
                  keyboardType={'numeric'}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
      <FloatingNextButton
        title="Top Up"
        btnContainer={style.topUpBtnContainer}
        titleBtnTxt={style.titleBtnTxt}
        onPress={() => onPressPaymentMethod()}
      />

      <View style={style.acceptTermContainer}>
        <Text style={style.termText}>
          {'I accept Terms and Conditions and Privacy Policy'}
        </Text>
      </View>
      <View style={style.stripeTxtContainer}>
        <Text style={style.stripeTxt}>{'Powered by Stripe'}</Text>
      </View>
    </SafeAreaView>
  );
}
