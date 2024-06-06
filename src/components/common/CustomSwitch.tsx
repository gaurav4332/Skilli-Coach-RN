import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function CustomSwitch({isOn, toggleSwitch}: any) {
  return (
    <View style={styles.outerTxtSwitch}>
      <View style={styles.outerTxtSwitch}>
        <TouchableOpacity
          style={[
            styles.outer,
            isOn
              ? {justifyContent: 'flex-end', backgroundColor: colors.lightGrey}
              : {
                  justifyContent: 'flex-start',
                  backgroundColor: colors.lightGreen,
                },
          ]}
          activeOpacity={1}
          onPress={toggleSwitch}>
          <View
            style={[
              styles.inner,
              isOn
                ? {backgroundColor: colors.lightGreen}
                : {backgroundColor: colors.darkBlue},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  outerTxtSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outer: {
    width: wp(14),
    height: hp(3.5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  inner: {
    width: Platform.OS === 'android' ? wp(7.3) : wp(7.3),
    height: hp(3.5),
    backgroundColor: colors.white,
    borderRadius: wp(5.5),
  },
  titleTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(18),
    color: colors.darkBlue,
  },
});
