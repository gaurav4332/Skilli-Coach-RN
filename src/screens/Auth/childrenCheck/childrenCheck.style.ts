import {Dimensions, Platform, StyleSheet} from 'react-native';
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
  childrenCardTitleView: {
    marginTop: hp(2),
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  innerTitleContainer: {
    marginVertical: hp(2),
  },
  insuranceTitleContainer: {
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  innerTitleTxt: {
    color: colors.white,
    fontSize: fontSize(16),
    fontFamily: fontFamily.openSansBold,
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
  dropDownContainer: {
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    borderRadius: wp(4),
    width: '97%',

    paddingVertical: hp(2),
  },
  dropDownTitltTxt: {
    color: colors.white,

    fontFamily: fontFamily.bold,
    marginHorizontal: wp(4),
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downArrowImg: {
    height: hp(3),
    width: wp(3),
    marginHorizontal: wp(7),
  },

  dropDownMainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(7),
    justifyContent: 'space-between',
  },
  separator: {
    marginTop: hp(3),
    marginBottom: hp(1),
    marginHorizontal: wp(5),
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGreen,
    width: '100%',
    alignSelf: 'center',
  },
  videoContainer: {
    flex: 1,
    height: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    marginVertical: hp(3),
    marginHorizontal: wp(5),
    borderRadius: wp(4),
  },
  childrenCardContainer: {
    flex: 1,
    height: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    marginTop: hp(2),
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
  uprBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  yesContainer: {
    backgroundColor: colors.white,
    width: wp(42),
    height: hp(7),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  noContainer: {
    backgroundColor: colors.white,
    width: wp(42),
    height: hp(7),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxtContainer: {
    color: colors.backgroundRed,
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(23),
  },
  noBtnTxtContainer: {
    color: colors.backgroundRed,
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(23),
  },
  btnContainer: {
    marginVertical: hp(5),
  },
  selectedButton: {
    backgroundColor: colors.lightGreen,
  },

  selectedButtonText: {
    color: colors.white,
  },
});
export default style;
