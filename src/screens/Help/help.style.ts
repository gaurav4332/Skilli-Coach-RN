import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {colors, fontFamily, fontSize} from '../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rightContainer: {
    paddingLeft: wp(3.5),
  },
  contactusContainer: {
    marginVertical: hp(2.5),
  },
  contactusTxt: {
    fontSize: fontSize(22),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
  },
  midContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  textInputStyle: {
    fontSize: fontSize(15),
    backgroundColor: colors.lightGrey,
    paddingVertical: Platform.OS === 'android' ? hp(1) : hp(2),
    marginVertical: hp(1),
    borderRadius: wp(3.5),
    paddingHorizontal: wp(5),
    textAlignVertical: 'center',
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
  },
  commentsTxtInputStyle: {
    marginVertical: hp(2),
    borderRadius: wp(4),
    backgroundColor: colors.lightGrey,
    width: '100%',
    alignSelf: 'center',
    fontSize: fontSize(17),
    textAlignVertical: 'top',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
    fontFamily: fontFamily.openSansBold,
    paddingVertical: hp(25),
    color: colors.darkBlue,
  },
  btnContainer: {
    marginTop: hp(3),
  },
});
export default style;
