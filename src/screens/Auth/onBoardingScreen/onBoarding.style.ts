import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors} from '../../../helper/utils';

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
  btnContainer: {
    marginTop: hp(4),
  },
  loginBtnContainer: {
    marginVertical: hp(2.7),
  },
  btnTxtStyle: {
    color: colors.backgroundRed,
  },
  btncontainerStyle: {
    width: '80%',
    backgroundColor: colors.white,
  },
});
export default style;
