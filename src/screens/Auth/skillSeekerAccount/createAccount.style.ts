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
    width: hp(41.5),
  },
  staticBarContainer: {
    alignSelf: 'center',
  },
  logoContainer: {
    alignItems: 'center',

    marginBottom: hp(1),
  },
  backContainer: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
    width: wp(5),
  },
  backImg: {
    height: hp(3.5),
    width: wp(3.5),
  },
  emailContainer: {
    marginTop: hp(5),
    width: '85%',
    alignSelf: 'center',
  },
  passwordContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: hp(2),
  },
  nextBtnContainer: {
    marginBottom: hp(3),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
  },
  textInputStyle: {
    paddingVertical: Platform.OS === 'ios' ? hp(1.5) : hp(1),
  },
  detailContainer: {
    marginTop: hp(3),
  },
  dropDownContainer: {
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    borderRadius: wp(4),
    width: '48%',
    marginBottom: hp(2),
  },
  dropDownTitltTxt: {
    color: colors.white,

    fontFamily: fontFamily.bold,
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
  },

  dropDownMainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(7),
    justifyContent: 'space-between',
  },
  preferredLanguage: {
    marginVertical: hp(-0.2),
    marginBottom: hp(3),
  },
  languageContainer: {
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: wp(4),
    width: '85%',
  },
  dropdown: {
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(0.7),
    borderRadius: wp(4),
    width: '85%',
  },
  dropDownGender: {
    alignSelf: 'center',
    backgroundColor: colors.inputBackground,
    paddingVertical: hp(0.7),
    borderRadius: wp(4),
    width: '48%',
    marginBottom: hp(2),
  },
  icon: {
    marginHorizontal: wp(10),
  },
  placeholderStyle: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    marginLeft: wp(3),
  },
  selectedTextStyle: {
    fontSize: fontSize(17),
    color: colors.white,
    fontFamily: fontFamily.bold,
    marginLeft: wp(3),
  },
  iconStyle: {
    width: wp(7),
    height: wp(7),
  },
  inputSearchStyle: {
    fontSize: fontSize(17),
    color: colors.darkBlue,
  },
  warnTitleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(10),
  },
  warnTxt: {
    color: colors.white,
    fontSize: fontSize(13),
    textAlign: 'center',
    marginVertical: hp(1),
  },
  midContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bottomContainer: {
    marginTop: hp(3),
  },
});
export default style;
