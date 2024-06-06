import {StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundRed,
  },
  backBtnContainer: {
    width: wp(10),
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  backBtn: {
    height: wp(6),
    width: wp(6),
  },
  logoContainer: {
    marginTop: hp(4),
    alignItems: 'center',
  },
  skilliLogo: {
    height: wp(25),
    width: wp(80),
  },
  qrCodeContainer: {
    flex: 1,
    alignItems: 'center',

    marginTop: hp(9),
  },
  qrCodeImg: {
    height: wp(60),
    width: wp(60),
  },
  coachNameTxt: {
    fontSize: fontSize(34),
    fontFamily: fontFamily.bold,
    color: colors.lightGreen,
    marginVertical: hp(7),
  },
});
