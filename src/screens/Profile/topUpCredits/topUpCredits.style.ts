import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../../helper/utils';
import {hp, wp} from '../../../helper/constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rightContainer: {
    paddingLeft: wp(3.5),
  },
  skilliCreditsContainer: {
    marginVertical: hp(2),
    marginHorizontal: wp(7),
  },
  skilliCreditsTxt: {
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
    fontSize: fontSize(23),
  },
  feeContainer: {
    marginVertical: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
    alignItems: 'center',
  },
  feeTitleTxt: {
    color: colors.backgroundRed,
    fontSize: fontSize(24),
    fontFamily: fontFamily.bold,
  },
  feeHomelogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feeHomelogoImg: {
    height: wp(3),
    width: wp(3),
    tintColor: colors.lightBlue,
  },
  feeTxt: {
    fontSize: fontSize(15),
    color: colors.lightBlue,
    fontFamily: fontFamily.bold,
    marginHorizontal: wp(2),
  },
  topUpcontainer: {
    borderWidth: 2,
    marginVertical: hp(1),
    width: '87%',

    alignSelf: 'center',
    paddingVertical: hp(1.5),
    borderRadius: wp(3.8),
    borderColor: colors.white,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
  },
  nextTxt: {
    fontSize: fontSize(20),
    color: 'white',
    fontFamily: fontFamily.openSansBold,
  },
  videoListContainer: {},
  itemContainer: {
    borderWidth: 1,
    borderColor: colors.lightGreen,
    borderRadius: wp(3),
    marginHorizontal: 5,
    marginVertical: 5,
    width: '48%',
  },
  video: {
    height: hp(12),
    width: '100%',
    borderRadius: wp(2.9),
  },
  itemText: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
  },
  btnControllerContainer: {
    justifyContent: 'center',
  },
  btnController: {
    position: 'absolute',
    alignSelf: 'center',
  },
  playBtn: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.white,
  },
  coachNameTxt: {
    fontSize: fontSize(21),
    fontWeight: '700',
    color: colors.backgroundRed,
  },
  coachTypeTxt: {
    fontSize: fontSize(16),
    fontWeight: '700',
    color: colors.darkBlue,
  },
  nameDetailContainer: {
    marginVertical: hp(1.5),
    marginHorizontal: wp(2),
  },
  statusText: {
    fontSize: fontSize(8),
    color: colors.white,
    fontWeight: '600',
  },
  statusContainer: {
    width: '35%',
    height: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    position: 'absolute',
    top: 10,
    right: 10,
  },
  completedStatus: {
    backgroundColor: colors.lightGreen,
  },
  pendingStatus: {
    backgroundColor: colors.backgroundRed,
  },
  nameAndStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeaderContainer: {
    marginTop: hp(2),
    marginHorizontal: wp(6),
  },
  interestContainer: {
    marginBottom: hp(5),
  },
  interestFlatList: {
    marginVertical: hp(2),
    width: '95%',
    alignSelf: 'center',
  },
  modalConetent: {
    paddingVertical: wp(2),
  },
  btnContainer: {
    marginTop: hp(4),
    marginBottom: hp(2),
  },
  totalEarnContainer: {
    marginVertical: hp(1),
  },
  midEarnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(6),
    alignItems: 'center',
  },
  totalEarnTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    fontSize: fontSize(22),
  },
  dureationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(16),
  },
  downArrow: {
    height: 10,
    width: 10,
    tintColor: colors.darkBlue,
    marginHorizontal: 5,
  },
  numberOfSessionView: {
    flexDirection: 'row',
    marginHorizontal: wp(3),
    marginTop: hp(2),
  },
  numOfCoachContainer: {
    flex: 1,
    marginHorizontal: wp(2),
    backgroundColor: colors.minorGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lightGreen,
    borderRadius: wp(4),
    paddingVertical: hp(1),
  },
  txtAndNumberContainer: {
    marginVertical: hp(1),
    alignItems: 'center',
  },
  numOfSessionTxt: {
    fontSize: fontSize(13),
    textAlign: 'center',
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
  },
  numberOfSessionTxt: {
    fontSize: fontSize(22),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  staticBarContainer: {
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
  staticBarImg: {
    height: hp(5),
    width: '100%',
  },
  creditsMainContainer: {
    borderWidth: 1,
    marginHorizontal: wp(5),
    height: hp(7),
    borderRadius: wp(4),
    borderColor: colors.lightGreen,
  },
  outerCreditContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: wp(4),
  },
  innerCreditContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yourCreditsTxt: {
    fontSize: fontSize(18),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
  creditsPointTxt: {
    fontSize: fontSize(24),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    marginLeft: wp(3.5),
  },
  seamlessExpContainer: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  seamlessExpTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(13),
    fontFamily: fontFamily.regular,
  },
  outerPoint: {
    position: 'absolute',
    top: hp(1),
    alignSelf: 'flex-end',
    right: 10,
    backgroundColor: colors.lightGreen,
    width: '23%',
    height: hp(3),
    borderRadius: wp(3),
    justifyContent: 'center',
    paddingHorizontal: wp(0.5),
  },
  innerPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointImg: {
    height: 10,
    width: 10,
    tintColor: colors.darkBlue,
    paddingHorizontal: wp(2),
  },
  pointTxt: {
    fontSize: fontSize(12),
    fontFamily: fontFamily.openSansBold,
    color: colors.darkBlue,
  },

  dropDownContainer: {
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
    borderRadius: wp(4),
    width: '48%',
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
    marginHorizontal: wp(1),
    tintColor: colors.darkBlue,
  },

  dropDownMainContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(7),
    justifyContent: 'space-between',
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
    marginVertical: hp(0.5),
  },
  dropDownGender: {
    borderRadius: wp(4),
    width: '30%',
  },

  placeholderStyle: {
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    marginLeft: wp(3),
    fontSize: fontSize(13),
  },
  selectedTextStyle: {
    fontSize: fontSize(13),
    color: colors.darkBlue,

    fontFamily: fontFamily.bold,
    marginLeft: wp(3),
  },
  iconStyle: {
    width: wp(7),
    height: wp(7),
    tintColor: colors.darkBlue,
  },
  inputSearchStyle: {
    fontSize: fontSize(17),
    color: colors.white,
  },
  warnTitleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(18),
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',

    marginVertical: hp(1),

    width: '100%',
  },
  noDataText: {
    textAlign: 'center',
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(15),
    color: colors.lightBlue,
  },
});
export default style;
