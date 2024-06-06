import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function TitleHeader({
  title,
  titleRight,
  onPressRightBtn,
  titleHeaderContainer,
}: any) {
  return (
    <View style={[styles.container, titleHeaderContainer]}>
      <Text style={styles.titleTxt}>{title}</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={onPressRightBtn}>
        <Text style={styles.titleRightTxt}>{titleRight}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTxt: {
    ...Platform.select({
      ios: {
        fontSize: fontSize(16),
        fontFamily: fontFamily.bold,
        color: colors.darkBlue,
      },
      android: {
        fontSize: fontSize(18),
        fontFamily: fontFamily.bold,
        color: colors.darkBlue,
      },
    }),
  },
  btnContainer: {
    justifyContent: 'center',
  },
  titleRightTxt: {
    color: colors.backgroundRed,
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(15),
  },
});
