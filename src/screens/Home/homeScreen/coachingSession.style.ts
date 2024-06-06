import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rightContainer: {
    paddingLeft: wp(3.5),
  },
  coachContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },
  hedaerDetailContainer: {
    marginHorizontal: wp(2),
  },
  yourCoachingSesTxt: {
    fontSize: fontSize(25),
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  coachSelectedContainer: {
    marginVertical: hp(0.5),
    backgroundColor: colors.lightGrey,
    paddingVertical: hp(2),
    width: '90%',
    alignSelf: 'center',
    borderRadius: wp(5),
  },
  coachSelectedTxt: {
    paddingLeft: wp(4),
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    fontSize: fontSize(17),
  },
  uploadPhotoView: {
    width: '85%',
    paddingVertical: hp(9),
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    marginTop: hp(4),
    borderRadius: wp(4),
  },
  addIconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addIconStyle: {
    height: wp(5),
    width: wp(5),
    tintColor: colors.darkBlue,
  },
  uploadPhotoTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansMedium,
    fontSize: fontSize(17),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  uploadedPhotoView: {
    width: '85%',
    paddingVertical: hp(13.5),
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    marginTop: hp(2),
    borderRadius: wp(4),
  },
  textInputStyle: {
    marginVertical: hp(2),
    borderRadius: wp(4),
    backgroundColor: colors.lightGrey,
    width: '85%',
    alignSelf: 'center',
    fontSize: fontSize(17),
    textAlignVertical: 'top',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
    fontFamily: fontFamily.medium,
    paddingVertical: hp(12),
    color: colors.darkBlue,
  },
  placeholderTextColor: {
    color: colors.darkBlue,
  },
  btnContainer: {
    marginVertical: hp(1),
    width: '45%',
  },
  enterSkillContainer: {
    paddingVertical: hp(10),
  },
  nextTxt: {
    fontSize: fontSize(20),
    color: 'white',
    fontFamily: fontFamily.medium,
  },
});
export default style;
