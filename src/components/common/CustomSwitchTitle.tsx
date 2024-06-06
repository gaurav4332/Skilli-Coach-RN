import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function CustomSwitchTitle({title}: any) {
  const [isOn, setIsOn] = useState(true);

  const toogleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerTxtSwitch}>
        <Text style={styles.titleTxt}>{title}</Text>
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
          onPress={toogleSwitch}>
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
  container: {
    marginHorizontal: wp(5),
    marginVertical: hp(1.5),
  },
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
    width: Platform.OS === 'android' ? wp(7.5) : wp(7.5),
    height: hp(3.5),
    backgroundColor: colors.white,
    borderRadius: wp(5),
    elevation: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  titleTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(18),
    color: colors.darkBlue,
  },
});
