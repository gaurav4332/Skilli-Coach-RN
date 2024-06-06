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
  coachContainer: {
    marginVertical: hp(1),
  },
  listContainer: {
    marginTop: hp(2),
    flex: 1,
  },
  itemContainer: {
    paddingHorizontal: wp(3),
    borderRadius: wp(4),
    marginVertical: hp(1),
    width: '85%',
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    paddingVertical: hp(2),
  },
  itemTxt: {
    fontSize: fontSize(17),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  contentTxt: {
    fontSize: fontSize(15),
    fontFamily: fontFamily.openSansBold,
    color: colors.darkBlue,
  },
});
export default style;
