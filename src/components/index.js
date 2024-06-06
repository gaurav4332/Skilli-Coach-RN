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
import {colors, fontFamily, fontSize} from '../helper/utils';
import {hp, wp} from '../helper/constants';
import Separator from './common/Separator';

const VideoModal = ({
  isVisible,
  onClose,
  subTitletext,
  titleText,
  titleText2,
  titleTxtStyle,
  buttonText,
  onButtonPress,
  modalConetent,
  btnContainer,
  onPressOpenCamera,
  onPressCameraRoll,
  onPressPixoVideo,
  onSelect,
}: any) => {
  return (
    <Modal
      visible={isVisible}
      //   animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <Pressable style={styles.modalContainer} onPress={onClose}>
        <View style={[styles.modalContent, modalConetent]}>
          <View style={styles.subContainer}>
            <TouchableOpacity onPress={() => onSelect('completed')}>
              <Text style={styles.subInput}>{'Completed'}</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress={() => onSelect('pending')}>
              <Text style={styles.subInput}>{'Pending'}</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity onPress={() => onSelect('draft')}>
              <Text style={styles.subInput}>{'Draft'}</Text>
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
    width: '85%',
    borderRadius: wp(4),
    marginTop: hp(0.5),
    marginBottom: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  subContainer: {
    width: '90%',
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
    paddingVertical: hp(1.5),

    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
    marginVertical: hp(0.1),
    textAlign: 'center',
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

export default VideoModal;
