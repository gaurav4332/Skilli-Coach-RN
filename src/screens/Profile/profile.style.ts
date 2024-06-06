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
  coachContainer: {
    marginVertical: hp(1),
  },
  hedaerDetailContainer: {},
  profileDetails: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  profileImg: {
    height: wp(44),
    width: '90%',
    borderRadius: wp(4),
    borderWidth: 1.5,
    borderColor: colors.lightGreen,
  },
  noprofileImg: {
    height: wp(44),
    width: '90%',
    borderRadius: wp(4),
    borderWidth: 1.5,
    borderColor: colors.lightGreen,
    justifyContent: 'center',
  },
  spotCoachImg: {
    height: wp(44),
    width: '100%',
    borderRadius: wp(5),
  },
  coachNameTypeContainer: {
    marginTop: hp(1),
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
  coachNameTxt: {
    fontSize: fontSize(22),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
  },
  coachTypeTxt: {
    fontSize: fontSize(17),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
  editAndAvailableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginVertical: hp(1),
  },
  editContainer: {
    backgroundColor: colors.backgroundRed,
    paddingVertical: hp(0.5),
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
  },
  certificateEditContainer: {
    backgroundColor: colors.backgroundRed,
    paddingVertical: hp(0.5),

    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
  },
  editProfileTxt: {
    fontSize: fontSize(12),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  availableTxt: {
    fontSize: fontSize(14),
    color: colors.darkBlue,
    fontFamily: fontFamily.openSansBold,
    marginHorizontal: wp(2),
  },
  goForIt: {
    marginHorizontal: wp(5),
  },
  goForItTxt: {
    fontFamily: fontFamily.openSansBold,
    color: colors.backgroundRed,
    fontSize: fontSize(17),
  },
  coachLabelTxt: {
    fontSize: fontSize(17),
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
    marginTop: hp(1),
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
  noVideoContainer: {
    paddingVertical: hp(12),
    alignItems: 'center',
  },
  noVideoTxt: {
    fontSize: fontSize(20),
    color: colors.lightBlue,
    fontFamily: fontFamily.openSansBold,
  },
  feeTitleTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(18),
    fontFamily: fontFamily.bold,
    width: '80%',
  },
  feeHomelogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
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
    width: '100%',
    height: hp(30),
    borderRadius: wp(5),
    marginVertical: hp(1.5),
    alignSelf: 'center',
  },
  videoList: {
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  flatListVideo: {
    width: wp(39),
    height: hp(14),
    borderRadius: wp(5),
  },
  videoListStyle: {
    height: wp(25),
    width: wp(33),
    marginHorizontal: wp(2.5),

    borderRadius: wp(4),
  },

  playBtn: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.white,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bioTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(15),
    fontFamily: fontFamily.openSansBold,
  },
  feeDesTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(12),
    fontFamily: fontFamily.openSansBold,
  },
  certificateBtn: {
    padding: hp(2),
    backgroundColor: 'rgb(201,228,224)',
    marginHorizontal: wp(5),
    borderRadius: wp(3),
    marginVertical: hp(1),
    marginBottom: hp(3),
    alignItems: 'center',
  },
  certificateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },

  videoContainer: {
    flex: 1,
    height: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    marginVertical: hp(3),
    marginHorizontal: wp(5),
    borderRadius: wp(4),
  },
  addMoreContainer: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    paddingVertical: hp(1.5),
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: wp(4),
    marginTop: hp(2),
  },
  addMoreTxt: {
    fontSize: fontSize(20),
    color: colors.white,
    fontFamily: fontFamily.openSansBold,
  },
  addIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: colors.darkBlue,
  },
  explainerVideoTxt: {
    fontSize: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  certificateTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(20),
    color: colors.darkBlue,
  },
  doneCertificateBtn: {
    padding: hp(1.5),
    backgroundColor: colors.backgroundRed,
    marginHorizontal: wp(5),
    borderRadius: wp(3),
    marginVertical: hp(1),
    marginBottom: hp(3),
    alignItems: 'center',
  },
  doneCertificateTxt: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize(20),
    color: colors.white,
  },
  certificateListContainer: {},
  pdfContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  editBio: {
    fontSize: fontSize(17),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'top',
    height: hp(13),
    marginVertical: hp(1),
    borderRadius: wp(4),
    paddingTop: hp(1),
    paddingHorizontal: wp(3),
    backgroundColor: colors.inputGrey,
    color: colors.darkBlue,
  },
  customEditBio: {
    fontSize: fontSize(15),
    fontFamily: fontFamily.openSansBold,
    textAlignVertical: 'top',
    color: colors.darkBlue,
    width: '100%',
  },
  bioContainer: {
    marginVertical: hp(2),
    marginHorizontal: wp(4),
  },
  bioInnerContainer: {
    backgroundColor: colors.inputGrey,
    borderRadius: wp(2),
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bioTitleContainer: {
    marginVertical: hp(0.5),
  },
  bioTitleTxt: {
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
});
export default style;
