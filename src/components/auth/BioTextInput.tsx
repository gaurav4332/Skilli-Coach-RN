import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';

export default function BioTextInput({
  title,
  onChangeText,
  editable,
  numberOfLines,
  value,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.bioTilteTxt}>{title}</Text>
      <TextInput
        style={styles.textInput}
        multiline={true}
        onChangeText={onChangeText}
        placeholderTextColor={colors.white}
        editable={editable}
        numberOfLines={numberOfLines}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
  },
  bioTilteTxt: {
    fontSize: fontSize(17),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  textInput: {
    color: colors.white,
    fontSize: fontSize(17),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'top',
    height: hp(10),
    width: '95%',
  },
});
