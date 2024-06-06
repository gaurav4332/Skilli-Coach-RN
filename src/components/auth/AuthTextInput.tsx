import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const AuthInputText = ({
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
  multiline,
  numberOfLines,
  placeholderTextColor,
}: any) => (
  <View style={containerStyle}>
    <Text style={[styles.titleText, titleContent]}>{title}</Text>
    <TextInput
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={[styles.inputText, textInputStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={colors.white}
      editable={editable}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
    {/* {warnText !== '' ? <Text style={styles.warnText}>{warnText}</Text> : null} */}
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.openSansBold,
    color: colors.white,
    marginLeft: wp(1),
  },
  inputText: {
    marginTop: hp(1),

    fontSize: fontSize(16),
    fontFamily: fontFamily.openSansBold,
    color: colors.white,
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(1.5),
    borderRadius: wp(3.5),
    paddingLeft: wp(4),
  },
  warnText: {
    fontSize: fontSize(12),
    color: colors.white,

    marginHorizontal: wp(1),
  },
});

export default AuthInputText;
