import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../../helper/utils';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rightContainer: {
    paddingLeft: wp(3.5),
  },
  coachingFeeContainer: {
    marginHorizontal: wp(7),
    marginTop: hp(2),
  },
  coachContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },
  coachingFeesTxt: {
    fontSize: fontSize(23),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
  },
  dropDownContainer: {
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    borderRadius: wp(4),
    width: '48%',
  },
  dropDownTitltTxt: {
    color: colors.white,
    fontSize: fontSize(17),
    fontFamily: fontFamily.medium,
    marginHorizontal: wp(4),
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp(7),
  },
  downArrowImg: {
    height: hp(3),
    width: wp(3),
    marginHorizontal: wp(7),
    tintColor: colors.darkBlue,
  },
  dropDownMainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(7),
    justifyContent: 'space-between',
  },
  preferredLanguage: {
    marginVertical: hp(2),
  },
  dropdown: {
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    paddingVertical: hp(0.7),
    borderRadius: wp(4),
    width: '90%',
  },
  dropDownGender: {
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(0.7),
    borderRadius: wp(4),
    width: '50%',
  },
  icon: {
    marginHorizontal: wp(10),
  },
  placeholderStyle: {
    fontSize: fontSize(15),
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    marginLeft: wp(3),
  },
  selectedTextStyle: {
    fontSize: fontSize(15),
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,

    marginLeft: wp(3),
  },
  iconStyle: {
    width: wp(7),
    height: wp(7),
    tintColor: colors.darkBlue,
  },
  itemTextStyle: {
    color: colors.darkBlue,
    fontSize: fontSize(15),
    fontFamily: fontFamily.medium,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textInputStyle: {
    marginVertical: hp(0.5),
    borderRadius: wp(4),
    backgroundColor: colors.lightGrey,
    width: '90%',
    alignSelf: 'center',
    fontSize: fontSize(15),
    textAlignVertical: 'top',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
    fontFamily: fontFamily.medium,
    color: colors.darkBlue,

    paddingVertical: hp(20),
  },
  creditsAndTopupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(1.5),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  skilliCreditsTxt: {
    fontSize: fontSize(15),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
  topUpContainer: {
    justifyContent: 'center',
    width: '18 %',
    borderRadius: wp(2),
    height: hp(3),
    backgroundColor: colors.lightGreen,
  },
  topUpTxt: {
    fontSize: fontSize(13),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontFamily: fontFamily.bold,
  },
  staticBarContainer: {
    alignItems: 'center',
  },
  staticBarImg: {
    height: hp(5),
    width: '90%',
  },
  outerFeeContainer: {},
  feeContainer: {
    marginVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightGrey,
    height: hp(7),
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
  },
  totalContainer: {
    justifyContent: 'flex-end',
    paddingBottom: hp(1),
  },
  feeTitleTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(17),
    fontFamily: fontFamily.bold,
    textAlignVertical: 'bottom',
  },
  feeHomelogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feeHomelogoImg: {
    height: wp(5),
    width: wp(5),
  },
  feeTxt: {
    fontSize: fontSize(24),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    marginHorizontal: wp(2),
  },
  footerContainer: {
    marginVertical: hp(1),
  },
  termAndConContainer: {
    marginVertical: hp(2),
    alignItems: 'center',
  },
  termAndConTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.regular,
    fontSize: fontSize(13),
  },
  btnContainer: {
    width: '90%',
  },
  modalConetent: {},
});
export default style;
