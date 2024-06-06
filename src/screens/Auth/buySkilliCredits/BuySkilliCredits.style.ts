import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontSize} from '../../../helper/utils';

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
    width: hp(40.02),
  },
  staticBarContainer: {
    alignSelf: 'center',
  },
  logoContainer: {
    alignItems: 'center',

    marginBottom: hp(1),
  },
  upperBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginTop: hp(2),
  },
  backContainer: {},
  skipBtn: {
    fontSize: fontSize(20),
    color: colors.white,
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
    marginTop: hp(2),
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleTxt: {
    color: colors.white,
    fontSize: fontSize(20),
    fontWeight: '700',
    textAlign: 'center',
  },
  flatListContainer: {
    marginVertical: hp(2),
  },
  outerItemContainer: {
    width: '85%',
    backgroundColor: colors.inputBackground,
    marginVertical: hp(1),
    borderRadius: wp(4),
    alignSelf: 'center',
  },
  innerItemContainer: {
    alignItems: 'center',
  },
  midItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1.7),
    paddingHorizontal: wp(7),
  },
  selectedItem: {
    borderColor: colors.white,
    borderWidth: 2,
  },
  itemPriceContainer: {
    justifyContent: 'center',
  },
  coachNameTxt: {
    color: colors.white,
    fontWeight: '800',
    fontSize: fontSize(20),
  },
  coachTypeTxt: {
    color: colors.white,
    fontWeight: '800',
    fontSize: fontSize(22),
  },
  skilliCreditsTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize(16),
  },
});
export default style;
