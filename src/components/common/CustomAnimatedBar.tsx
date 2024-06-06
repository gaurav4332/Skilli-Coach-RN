import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Easing, Image} from 'react-native';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';
import {icons} from '../../helper/iconConstants';

const CustomAnimatedBar = ({percentage, duration, text, iconSource}: any) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      Animated.timing(animatedValue, {
        toValue: percentage / 100,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      isMounted.current = false;
    }
  }, [percentage, duration, animatedValue]);

  const height = hp(3.65);
  const width = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Animated.View style={[styles.progressBar, {width, height}]}>
          <Image style={styles.iconView} source={icons.logo_next} />
        </Animated.View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: wp(3),
            flexDirection: 'row',
          }}>
          {iconSource && (
            <Image
              style={{height: wp(4), width: wp(4), marginHorizontal: wp(1)}}
              source={icons.home}
            />
          )}
          <Text style={styles.feeTxt}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(3.65),
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.3,
    borderColor: colors.lightGreen,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.greenies,
    position: 'relative',
    borderRadius: 20,
  },
  iconView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: wp(7.3),
    width: wp(7.3),
  },
  feeTxt: {
    fontSize: fontSize(20),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    textAlignVertical: 'center',
  },
});

export default CustomAnimatedBar;
