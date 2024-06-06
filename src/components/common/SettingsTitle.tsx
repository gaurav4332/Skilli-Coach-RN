import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const SettingsTile = ({
  title,
  onPressBack,
  titleText,
  rightContainer,
  onPressRightBtn,
}: any) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onPressBack} style={styles.menuContainer}>
      <Image
        source={icons.backArrowRed}
        resizeMode={'contain'}
        style={styles.menuIcon}
      />
    </TouchableOpacity>

    <Image
      source={icons.skilliLogo2}
      style={styles.skilliLogo}
      resizeMode="cover"
    />
    <TouchableOpacity
      onPress={onPressRightBtn}
      style={[styles.menuContainer, rightContainer]}>
      <Image
        source={icons.drawerIcon}
        resizeMode={'contain'}
        style={styles.menuIcon}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp(3.5),
    justifyContent: 'space-between',
  },
  menuContainer: {
    width: wp(10.67),
    height: wp(10.67),

    borderRadius: wp(100),
    justifyContent: 'center',
  },
  menuIcon: {
    width: wp(5.33),
    height: wp(5.33),
  },
  userNameText: {
    color: colors.backgroundRed,
    fontWeight: '700',
    fontSize: fontSize(20),
  },
  skilliLogo: {
    height: wp(10),
    width: wp(10),
  },
});

export default SettingsTile;
