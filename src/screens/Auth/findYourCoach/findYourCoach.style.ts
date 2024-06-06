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
    width: hp(40.02),
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
    marginVertical: hp(4),
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
    flex: 1,
    marginVertical: hp(1),

    justifyContent: 'space-between',
  },
  outerItemContainer: {
    width: '85%',
    backgroundColor: 'white',
    marginVertical: hp(1),
    borderRadius: wp(4),
    alignSelf: 'center',
  },
  innerItemContainer: {
    paddingVertical: hp(1.7),
    paddingHorizontal: wp(2),
    marginLeft: wp(3),
  },
  midItemContainer: {
    flexDirection: 'row',
  },
  selectedItem: {
    borderColor: colors.darkBlue,
    borderWidth: 2,
  },
  coachImg: {
    width: wp(30),
    height: wp(17),
    borderRadius: wp(3),
    marginLeft: wp(1),
    alignItems: 'center',
    alignSelf: 'center',
  },
  coachNameTxt: {
    color: colors.backgroundRed,

    fontFamily: fontFamily.bold,
    fontSize: fontSize(20),
  },
  coachTypeTxt: {
    color: colors.darkBlue,

    fontFamily: fontFamily.bold,
    fontSize: fontSize(16),
  },
});
export default style;
