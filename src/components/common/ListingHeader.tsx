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

const ListingHeader = ({
  title,
  onPressMenu,
  titleText,
  rightContainer,
  onPressRightBtn,
}: any) => (
  <View style={styles.header}>
    <Text style={[styles.userNameText, titleText]}>{title}</Text>
    <TouchableOpacity
      onPress={onPressRightBtn}
      style={[styles.menuContainer, rightContainer]}>
      <Text style={styles.viewAllTxt}>{'View all'}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp(3.5),
    marginLeft: wp(7),

    justifyContent: 'space-between',
  },
  menuContainer: {
    justifyContent: 'center',
  },
  menuIcon: {
    width: wp(5.33),
    height: wp(5.33),
  },
  userNameText: {
    color: colors.darkBlue,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  viewAllTxt: {
    fontSize: fontSize(15),
    color: colors.backgroundRed,
    fontFamily: fontFamily.medium,
  },
});

export default ListingHeader;
