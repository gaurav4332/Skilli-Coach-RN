import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  logo: {
    height: hp(22.02),
    width: hp(22.02),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? hp(18) : hp(17),
    marginBottom: hp(3),
  },
  emailContainer: {
    marginTop: hp(2),
    width: '80%',
    alignSelf: 'center',
  },
  passwordContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  titleText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.bold,
    color: colors.white,
    marginLeft: wp(1),
    marginBottom: hp(0.5),
  },
  btnContainer: {
    marginTop: hp(2),
    width: '35%',
    backgroundColor: colors.white,
  },
  forgotPswdContainer: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
  btnTxtStyle: {
    color: colors.backgroundRed,
  },
  forgotPswdTxt: {
    color: colors.white,
    fontSize: fontSize(17),
    fontFamily: fontFamily.medium,
  },
});
export default style;
