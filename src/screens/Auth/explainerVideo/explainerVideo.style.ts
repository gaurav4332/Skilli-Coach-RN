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
    width: hp(40.02),
  },
  staticBarContainer: {
    alignSelf: 'center',
  },
  logoContainer: {
    marginVertical: hp(2),
    marginHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  skipBtn: {
    fontSize: fontSize(20),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    marginVertical: hp(5),
    marginHorizontal: wp(5),
    borderRadius: wp(4),
  },
  explainerVideoTxt: {
    fontSize: fontSize(20),
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
});
export default style;
