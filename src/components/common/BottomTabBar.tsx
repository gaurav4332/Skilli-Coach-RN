import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  Platform,
} from 'react-native';

import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const TabItem = ({source, onPress, title, index}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.centerStyle}>
    <Image source={source} style={styles.iconStyle} resizeMode={'contain'} />
    <Text style={styles.titleText}>{title}</Text>
  </TouchableOpacity>
);

function BottomTabBar({navigation, state}: any) {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.containerStyle}>
        <View style={styles.contentView}>
          <TabItem
            source={icons.home}
            title={'Home'}
            onPress={() =>
              navigation.navigate('HomeStackNavigation', {screen: 'Home'})
            }
          />
          <TabItem
            source={icons.History2}
            title={'History'}
            onPress={() => navigation.navigate('History')}
          />
          <TabItem
            source={icons.credits}
            title={'Credits'}
            onPress={() =>
              navigation.navigate('TopUpCredits', {
                screen: 'TopUpCredits',
              })
            }
          />
          <TabItem
            source={icons.notification2}
            title={'Notifications'}
            onPress={() => navigation.navigate('YourNotification')}
          />
          <TabItem
            source={icons.account}
            title={'Profile'}
            onPress={() =>
              navigation.navigate('ProfileStackNavigation', {screen: 'Profile'})
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {},
  containerStyle: {
    height: Platform.OS === 'android' ? hp(10) : hp(10),
    backgroundColor: colors.white,
    borderTopRightRadius: wp(5.33),
    borderTopLeftRadius: wp(5.33),
    borderWidth: 0.4,
    borderColor: colors.black,
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: wp(0),
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
  },
  centerStyle: {
    flex: 1,
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: colors.darkBlue,
    marginVertical: hp(0.7),
    fontSize: fontSize(10),
    fontFamily: fontFamily.openSansBold,
  },
  activeDot: {
    height: wp(2.5),
    width: wp(2.5),
    borderRadius: wp(100),
  },
});

export default BottomTabBar;
