import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  rightContainer: {
    paddingLeft: wp(3.5),
  },
  contentContainer: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
  },
  logo: {
    height: hp(10.02),
    width: hp(10.02),
  },
  staticBar1: {
    height: hp(10.02),
    width: hp(43.5),
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
  videoContainer: {
    marginBottom: hp(3),
  },
  quateContainer: {
    alignItems: 'flex-start',
    marginHorizontal: wp(5),
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  bioContainer: {
    padding: hp(1),
    backgroundColor: colors.inputBackground,
    width: '90%',
    alignSelf: 'center',
    marginVertical: hp(3),
    borderRadius: wp(3),
  },
  uploadPhotoView: {
    width: '90%',
    paddingVertical: hp(9),
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
    tintColor: colors.white,
  },
  uploadPhotoTxt: {
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(17),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  uploadedPhotoView: {
    width: '90%',
    height: hp(25),
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    marginTop: hp(3),
    borderRadius: wp(4),
  },
  btnContainer: {
    marginVertical: hp(2),
  },
});
export default style;
