import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {colors, fontSize} from '../../helper/utils';

const FloatingNextButton = ({
  onPress,
  title,
  btnContainer,
  titleBtnTxt,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.container, btnContainer]}
      onPress={onPress}>
      <Text style={[styles.buttonText, titleBtnTxt]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    bottom: hp(6),
    left: '10%',
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    paddingVertical: hp(1.8),
    borderRadius: wp(3.8),
    borderColor: colors.white,
    backgroundColor: colors.backgroundRed,
  },
  buttonText: {
    fontSize: fontSize(20),
    color: 'white',
  },
});

export default FloatingNextButton;
