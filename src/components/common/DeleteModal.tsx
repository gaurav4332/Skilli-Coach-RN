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

const DeleteModal = ({
  isVisible,
  onClose,
  onButtonPress,
  modalConetent,
  btnContainer,
  onPressOpenCamera,
}: any) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={[styles.modalContent, modalConetent]}>
          <View style={styles.subContainer}>
            <View>
              {/* <Text style={styles.titleMainTxt}>
                {'Are you sure want to delete account ?'}
              </Text> */}
              <Text style={styles.subInput}>
                {/* {'Your changes have \nbeen saved.'} */}
                {
                  'Please note that deleting your account might clear all your credits. Please contact admin if you require your credits to be refunded to you'
                }
              </Text>
            </View>
            <TouchableOpacity
              onPress={onButtonPress}
              style={[styles.btnContainer, btnContainer]}>
              <Text style={styles.btnTxt}>{'Ok'}</Text>
            </TouchableOpacity>
          </View>
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
    // marginBottom: hp(7),
    alignItems: 'center',
    // paddingVertical: hp(3),
    // height: hp(20),
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
    marginTop: hp(3),
    height: hp(4.5),
    backgroundColor: colors.lightGreen,
    width: '90%',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize(17),
    color: colors.white,
    // fontWeight: '700',
    fontFamily: fontFamily.openSansBold,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  subContainer: {
    width: '90%',
    marginVertical: hp(2),
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
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(17),
    color: colors.darkBlue,
  },
  input: {
    flex: 1,
    height: hp(5),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
    paddingLeft: wp(4),
  },
  skilliInput: {
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
    fontFamily: fontFamily.openSansBold,
    paddingLeft: wp(4),
    fontSize: fontSize(12),
    textAlign: 'right',
  },
  subInput: {
    height: hp(15),
    // backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
    paddingLeft: wp(4),
    marginVertical: hp(0.1),
    textAlign: 'center',
    // textAlignVertical: 'center',
    fontSize: fontSize(18),
  },
  titleMainTxt: {
    // height: hp(5),

    // backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    paddingLeft: wp(4),
    marginVertical: hp(2),
    textAlign: 'center',
    // textAlignVertical: 'center',
    fontSize: fontSize(20),
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

export default DeleteModal;
