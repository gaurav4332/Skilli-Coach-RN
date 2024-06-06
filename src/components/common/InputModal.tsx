import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {hp, wp} from '../../helper/constants';
import Separator from './Separator';

const InputModal = ({
  isVisible,
  onClose,
  subTitletext,
  titleText,
  titleText2,
  titleTxtStyle,
  dollarValue,
  onDollarValueChange,
  buttonText,
  onButtonPress,
  modalConetent,
  btnContainer,
  skilliCredits,
  onSkilliCreditsChange,
  name,
  onNameChange,
  bsb,
  onBsbChange,
  accountNumber,
  onAccountNumberChange,
  points,
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
            <View style={styles.container}>
              <View style={styles.inputOuter}>
                <Text style={styles.dollarSignTxt}>{'$'}</Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={colors.darkBlue}
                  keyboardType="numeric"
                  value={dollarValue}
                  onChangeText={onDollarValueChange}
                />
              </View>

              <View style={styles.inputOuter}>
                <Text style={styles.skilliInput} numberOfLines={1}>
                  {points}
                </Text>
                <Text style={styles.skilliInputTxt}>{'Skilli Credits'}</Text>
              </View>
            </View>
          </View>
          <Separator />
          <View style={styles.subContainer}>
            <TextInput
              style={styles.subInput}
              placeholder="Name"
              placeholderTextColor={colors.darkBlue}
              value={name}
              onChangeText={onNameChange}
            />
            <TextInput
              style={styles.subInput}
              placeholder="BSB"
              placeholderTextColor={colors.darkBlue}
              keyboardType="numeric"
              value={bsb}
              onChangeText={onBsbChange}
              maxLength={6}
            />
            <TextInput
              style={styles.subInput}
              placeholder="Account Number"
              placeholderTextColor={colors.darkBlue}
              keyboardType="numeric"
              value={accountNumber}
              onChangeText={onAccountNumberChange}
            />
          </View>

          <TouchableOpacity
            onPress={onButtonPress}
            style={[styles.btnContainer, btnContainer]}>
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
    marginVertical: hp(0.5),
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  subContainer: {
    width: '90%',
    marginTop: hp(2),
  },
  inputOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    paddingLeft: wp(4),
  },
  dollarSignTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(18),
    color: colors.darkBlue,
  },
  input: {
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    paddingLeft: wp(4),
  },
  skilliInput: {
    fontSize: fontSize(15),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'center',
    paddingHorizontal: wp(2),
    color: colors.darkBlue,
  },

  skilliInputTxt: {
    fontSize: fontSize(11),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'center',
    paddingHorizontal: wp(2),
    color: colors.backgroundRed,
  },
  creditsInput: {
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.backgroundRed,
    fontFamily: fontFamily.medium,
    paddingLeft: wp(4),
    fontSize: fontSize(12),
    textAlign: 'right',
  },
  subInput: {
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    paddingLeft: wp(4),
    marginVertical: hp(0.5),
  },
  text: {
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    textAlign: 'right',

    textAlignVertical: 'center',
    color: colors.backgroundRed,
    fontFamily: fontFamily.medium,
    fontSize: fontSize(10),
  },
  textCvv: {
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    paddingLeft: wp(4),
    textAlignVertical: 'center',
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    fontSize: fontSize(13),
  },
});

export default InputModal;
