import {StyleSheet} from 'react-native';
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
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  innerTitleContainer: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  innerTitleTxt: {
    color: colors.white,
    fontSize: fontSize(16),
    fontFamily: fontFamily.medium,
  },
  cardContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },
  input: {
    height: hp(6),
    backgroundColor: colors.inputBackground,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.white,
    fontFamily: fontFamily.bold,
    paddingLeft: wp(4),
    marginVertical: hp(1),
    fontSize: fontSize(17),
  },
  ratesInput: {
    height: hp(6),
    backgroundColor: colors.inputBackground,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.lightGreen,
    fontFamily: fontFamily.bold,
    paddingLeft: wp(4),
    marginVertical: hp(1),
    fontSize: fontSize(17),
  },
  feedBackInput: {
    height: hp(14),
    paddingTop: hp(2),

    backgroundColor: colors.inputBackground,
    borderRadius: wp(4),
    marginRight: 8,
    color: colors.white,
    fontFamily: fontFamily.medium,
    paddingLeft: wp(4),
    marginVertical: hp(1),
    fontSize: fontSize(17),
    textAlignVertical: 'top',
  },
  separator: {
    marginTop: hp(3),
    marginBottom: hp(1),
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGreen,
    width: '100%',
    alignSelf: 'center',
  },
  rowContainer: {
    justifyContent: 'space-between',
  },
  addMoreBtn: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: hp(2),
    borderRadius: wp(4),
    borderColor: colors.white,
    backgroundColor: colors.inputBackground,
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  addIcon: {
    height: wp(5),
    width: hp(5),
  },
  addMoreTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(17),
    color: colors.white,
    marginVertical: hp(0.5),
  },
  btnContainer: {
    marginBottom: hp(3),
  },
  bioContainer: {
    padding: hp(1),
    backgroundColor: colors.inputBackground,
    width: '100%',
    alignSelf: 'center',
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
});
export default style;
