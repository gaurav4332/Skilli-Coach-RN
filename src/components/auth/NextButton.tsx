import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function NextButton({title, onPress, btnContainer}: any) {
  return (
    <TouchableOpacity
      style={[styles.container, btnContainer]}
      onPress={onPress}>
      <Text style={styles.nextTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: hp(1.8),
    borderRadius: wp(3.8),
    borderColor: colors.white,
    backgroundColor: colors.backgroundRed,
    alignItems: 'center',
  },
  nextTxt: {
    fontSize: fontSize(20),
    color: 'white',
    fontFamily: fontFamily.medium,
  },
});
