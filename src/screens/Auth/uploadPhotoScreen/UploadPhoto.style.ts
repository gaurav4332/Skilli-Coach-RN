import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  logo: {
    height: hp(10.02),
    width: hp(10.02),
  },
  staticBar1: {
    height: hp(10.02),
    width: hp(42.5),
  },
  staticBarContainer: {
    alignSelf: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  backContainer: {
    marginTop: hp(2.5),
    marginHorizontal: wp(5),
    width: wp(5),
  },
  backImg: {
    height: hp(3.5),
    width: wp(3.5),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  uploadPhotoView: {
    width: '90%',
    paddingVertical: hp(10.5),
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    marginTop: hp(3),
    borderRadius: wp(4),
  },
  addIconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addIconStyle: {
    height: wp(5),
    width: wp(5),
  },
  uploadPhotoTxt: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: fontSize(17),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  uploadedPhotoView: {
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,

    width: '90%',
    height: 200,
  },
  downContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  socialContainer: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
  },
  socialMediaTitleTxt: {
    color: colors.white,
    fontSize: fontSize(19),
    fontFamily: fontFamily.bold,
  },
  socialMidContainer: {
    marginVertical: hp(1),
  },
  socialInnerContainer: {
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  socialIcons: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.white,
  },
  textInputStyle: {
    backgroundColor: colors.inputBackground,
    width: '80%',
    marginHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
  nextBtn: {
    marginVertical: hp(3),
  },
});
export default style;
