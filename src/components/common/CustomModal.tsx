import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';

const CustomModal = ({
  isVisible,
  onClose,
  subTitletext,
  titleText,
  titleText2,
  titleTxtStyle,
  buttonText,
  onButtonPress,
  modalConetent,
}: any) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={[styles.modalContent, modalConetent]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.titleTxt, titleTxtStyle]}>{titleText}</Text>
            <Text style={[styles.titleTxt, titleTxtStyle]}>{titleText2}</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={[styles.subtitleTxt, titleTxtStyle]}>
              {subTitletext}
            </Text>
          </View>
          <TouchableOpacity onPress={onButtonPress} style={styles.btnContainer}>
            <Text style={styles.btnTxt}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(191,227,224,0.8)',
  },
  modalContent: {
    backgroundColor: colors.white,
    width: '80%',
    borderRadius: wp(4),
    marginBottom: hp(7),
    alignItems: 'center',
  },
  titleContainer: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
  subTitleContainer: {
    width: '80%',
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.backgroundRed,
    fontSize: fontSize(24),
    fontWeight: '700',
  },
  subtitleTxt: {
    color: colors.darkBlue,

    fontSize: fontSize(15),
    marginVertical: hp(1),
  },
  btnContainer: {
    marginVertical: hp(2),
    height: hp(5.5),
    backgroundColor: colors.lightGreen,
    width: '90%',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: fontSize(17),
    color: colors.white,
    fontWeight: '700',
  },
});

export default CustomModal;
