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
    marginTop: Platform.OS === 'android' ? hp(11) : hp(11),
    marginBottom: hp(3),
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
  btnContainer: {
    marginTop: hp(3),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  loginBtnContainer: {
    marginVertical: hp(2.1),
  },
  btnTxtStyle: {
    color: colors.white,
  },
  btncontainerStyle: {
    width: '80%',
    backgroundColor: colors.lightGreen,
  },
});
export default style;
