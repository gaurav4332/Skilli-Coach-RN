import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const DetailsTextInput = ({
  title,
  value,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
  containerStyle,
  warnText,
  titleContent,
  textInputStyle,
  editable,
  maxLength,
}: any) => (
  <View style={containerStyle}>
    <TextInput
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={[styles.inputText, textInputStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={colors.white}
      editable={editable}
      maxLength={maxLength}
    />
    {warnText !== '' ? <Text style={styles.warnText}>{warnText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize(16),
    color: colors.white,
    marginLeft: wp(1),
    fontFamily: fontFamily.bold,
    paddingVertical: hp(1),
  },
  inputText: {
    fontSize: fontSize(16),
    color: colors.white,
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(1.5),
    borderRadius: wp(3.5),
    paddingLeft: wp(4),
    fontFamily: fontFamily.bold,
    marginVertical: hp(0.5),
  },
  warnText: {
    fontSize: fontSize(12),
    marginVertical: hp(0.3),
    color: colors.white,
    marginHorizontal: wp(2),
  },
});

export default DetailsTextInput;
