//import liraries
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const AuthButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  showRightIcon,
}: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, containerStyle]}>
    <Text style={[styles.textTitle, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '80%',
    paddingVertical: hp(1.6),
    borderRadius: wp(3.8),
  },
  textTitle: {
    fontSize: fontSize(20),
    fontFamily: fontFamily.openSansExtraBold,
  },
});

export default AuthButton;
