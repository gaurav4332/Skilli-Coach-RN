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
  contentContainer: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
  },
  detailContainer: {
    backgroundColor: colors.lightGrey,
    marginVertical: hp(3),
    width: '90%',
    alignSelf: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(2),
    borderRadius: wp(4),
  },
  titleTxt: {
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
    fontSize: fontSize(17),
  },
  detailTxt: {
    fontFamily: fontFamily.medium,
    color: colors.darkBlue,
    marginVertical: hp(2),
    fontSize: fontSize(15),
  },
});
export default style;
