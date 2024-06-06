import {Platform, StyleSheet} from 'react-native';
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
    marginHorizontal: wp(5),
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(20),
    fontFamily: fontFamily.bold,
  },
  videoContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    marginVertical: hp(3),
    marginHorizontal: wp(5),
    borderRadius: wp(4),
  },
  addIcon: {
    height: wp(5),
    width: wp(5),
  },
  explainerVideoTxt: {
    fontSize: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
  btnContainer: {
    marginVertical: hp(2),
  },
});
export default style;
