import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import {colors, fontFamily, fontSize} from '../../../helper/utils';

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
  hedaerDetailContainer: {},
  profileImg: {
    marginHorizontal: wp(5),
  },
  spotCoachImg: {
    height: wp(44),
    width: '100%',
    borderRadius: wp(5),
  },
  coachNameTypeContainer: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  nameAndStarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnControllerContainer: {
    justifyContent: 'center',
  },
  btnController: {
    position: 'absolute',
    alignSelf: 'center',
  },
  starIcon: {
    height: wp(5),
    width: wp(5),
    marginRight: wp(2),
  },
  coachNameTxt: {
    fontSize: fontSize(22),
    color: colors.backgroundRed,

    fontFamily: fontFamily.bold,
  },
  coachTypeTxt: {
    fontSize: fontSize(15),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    marginVertical: hp(0.5),
  },
  coachLabelTxt: {
    fontSize: fontSize(15),
    color: colors.backgroundRed,
    fontFamily: fontFamily.medium,
    width: '90%',
  },
  coachBioTxt: {
    marginVertical: hp(1),
    fontSize: fontSize(17),
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    width: '90%',
  },
  feeContainer: {
    marginTop: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coachFeeDescriptionTxt: {
    marginVertical: hp(1),
    fontSize: fontSize(12),
    color: colors.darkBlue,
    fontFamily: fontFamily.medium,
    width: '90%',
  },
  btnContainer: {
    marginVertical: hp(1.5),
    width: '100%',
  },
  meetCoachContainer: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
  nameHeaderTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(20),
    fontFamily: fontFamily.bold,
  },
  outerFeeContainer: {
    marginTop: hp(1),
    marginBottom: hp(5),
  },
  feeTitleTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(18),
    fontFamily: fontFamily.bold,
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
    fontSize: fontSize(22),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
    marginHorizontal: wp(2),
  },
  video: {
    width: wp(90),
    height: hp(30),
    borderRadius: wp(5),
    marginVertical: hp(1.5),
    alignSelf: 'center',
  },
  videoList: {
    marginVertical: hp(2),
    marginHorizontal: wp(1),
  },
  flatListVideo: {
    width: wp(39),
    height: hp(14),
    borderRadius: wp(5),
  },
  videoListStyle: {
    height: wp(25),
    width: wp(33),
    marginHorizontal: wp(1),
    marginLeft: wp(4),
    borderRadius: wp(4),
  },
  interestFlatList: {},

  playBtn: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.white,
  },
});
export default style;
