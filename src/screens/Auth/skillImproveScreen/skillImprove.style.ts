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
    width: hp(41.2),
  },
  staticBarContainer: {
    alignSelf: 'center',
  },
  logoContainer: {
    alignItems: 'center',

    marginBottom: hp(1),
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
  emailContainer: {
    marginTop: hp(4),
    width: '85%',
    alignSelf: 'center',
  },
  passwordContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: hp(0.7),
    marginBottom: hp(3),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(22),

    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  textInputStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    width: '85%',
    paddingVertical: hp(1),
    fontWeight: '700',
    letterSpacing: 0.5,
    borderRadius: 100,
  },
  flatListContainer: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(0.9),
    marginHorizontal: wp(-5),
    marginLeft: wp(9),
    paddingVertical: hp(2),
    borderRadius: wp(4),
  },
  selectedItem: {
    width: '40%',
    borderRadius: wp(4),
    backgroundColor: colors.lightGreen,
  },
  skillText: {
    fontSize: fontSize(18),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
  },
  selectedSkillText: {
    fontFamily: fontFamily.bold,
    color: colors.white,
    fontSize: fontSize(18),
  },
  preferredLanguage: {
    marginTop: hp(1.5),
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
    width: '50%',
  },
  icon: {
    marginHorizontal: wp(10),
  },
  placeholderStyle: {
    fontSize: fontSize(18),
    color: colors.white,
    fontFamily: fontFamily.bold,
    marginLeft: wp(3),
  },
  selectedTextStyle: {
    fontSize: fontSize(18),
    color: colors.white,
    fontWeight: '500',
    marginLeft: wp(3),
  },
  iconStyle: {
    width: wp(7),
    height: wp(7),
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
  seperator: {
    marginVertical: hp(1.7),
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '90%',
    alignSelf: 'center',
  },
});
export default style;
