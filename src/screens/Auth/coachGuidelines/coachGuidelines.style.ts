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
  guidelinesContainer: {
    paddingHorizontal: wp(2),
  },
  bioTilteTxt: {
    fontSize: fontSize(17),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  textInput: {
    color: colors.white,
    fontSize: fontSize(17),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'top',
    height: hp(45),
    flex: 1,
    width: '95%',
  },
  btnContainer: {
    marginVertical: hp(2),
  },
});
export default style;
