import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import {hp, wp} from '../../helper/constants';
import {colors} from '../../helper/utils';

export default function PickerExample() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+ 91');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          width: '20%',
          height: hp(6),
          backgroundColor: colors.inputBackground,
          padding: 10,
          borderRadius: wp(4),
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 20,
          }}>
          {countryCode}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
