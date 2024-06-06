import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  backContainer: {
    width: wp(10),
    marginHorizontal: wp(3),
    marginVertical: hp(2),
  },

  backImg: {
    height: wp(5),
    width: wp(5),
  },
  logo: {
    height: hp(22.02),
    width: hp(22.02),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? hp(1) : hp(1),
  },
  emailContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  passwordContainer: {
    width: '100%',
  },
  titleText: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.bold,
    color: colors.white,
    marginLeft: wp(1),
    marginBottom: hp(1),
  },
  btnContainer: {
    marginVertical: hp(4),
    width: '35%',
    backgroundColor: colors.white,
  },
  btnTxtStyle: {
    color: colors.backgroundRed,
  },
  titleContainer: {
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(17),
    fontFamily: fontFamily.openSansBold,
    marginVertical: hp(2),
  },
  forgotPswdContainer: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
  forgotPswdTxt: {
    color: colors.white,
    fontSize: fontSize(17),
  },
  textInput: {
    marginVertical: hp(1),
  },
});
export default style;
