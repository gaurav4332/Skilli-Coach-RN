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
  titleContainer: {
    marginVertical: hp(2),
  },
  titleTxt: {
    color: colors.backgroundRed,
    fontSize: fontSize(25),
    fontFamily: fontFamily.bold,
  },
  cardContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },
  input: {
    height: hp(6),
    backgroundColor: colors.lightGrey,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    paddingLeft: wp(4),
    marginVertical: hp(1),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addMoreBtn: {
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: hp(1.5),
    borderRadius: wp(4),
    borderColor: colors.white,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    marginTop: hp(2),
  },
  nextTxt: {
    fontSize: fontSize(20),
    color: 'white',
    fontFamily: fontFamily.bold,
  },
  btnContainer: {
    marginVertical: hp(2),
  },
});
export default style;
