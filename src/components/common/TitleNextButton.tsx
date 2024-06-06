import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';

export default function TitleNextButton({title, onPress}: any) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.titleTxt}>{title}</Text>

      <TouchableOpacity>
        <Image
          source={icons.nextBtn}
          style={{height: hp(4), width: wp(4)}}
          resizeMode="contain"
          tintColor={colors.backgroundRed}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.lightGrey,
    paddingVertical: hp(1.5),
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  titleTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    fontSize: fontSize(17),
  },
});
