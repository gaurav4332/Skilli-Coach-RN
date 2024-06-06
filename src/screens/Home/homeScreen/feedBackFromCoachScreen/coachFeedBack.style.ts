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
  feedbackTitleTxt: {
    fontSize: fontSize(17),
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
  },
  feebackContainer: {
    marginHorizontal: wp(7.5),
    marginVertical: hp(2),
  },
  hedaerDetailContainer: {
    marginHorizontal: wp(2),
  },
  creditsAndTopupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
    alignItems: 'center',
  },
  skilliCreditsTxt: {
    fontSize: Platform.OS === 'ios' ? fontSize(18) : fontSize(18),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
  pedingFeedbackView: {
    backgroundColor: colors.lightGreen,
    width: '23%',
    alignItems: 'center',
    paddingVertical: hp(0.8),
    borderRadius: wp(5),
  },
  pendingVideoTxt: {
    fontSize: fontSize(7),
    fontFamily: fontFamily.medium,
    color: colors.white,
  },
  topUpContainer: {
    justifyContent: 'center',
    width: '29%',
    borderRadius: wp(5),
    height: hp(4),
    backgroundColor: colors.lightGreen,
  },
  topUpTxt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: fontSize(10),
  },
  meetCoachContainer: {
    alignItems: 'center',
  },
  btnControllerContainer: {
    justifyContent: 'center',
  },
  btnController: {
    position: 'absolute',
    alignSelf: 'center',
  },
  video: {
    borderRadius: wp(5),
    width: '100%',
    height: hp(35),
  },
  videoList: {
    width: wp(40),
    height: hp(12),
    borderRadius: wp(5),
    marginHorizontal: wp(2),
    marginVertical: hp(2),
  },
  textInputStyle: {
    marginVertical: hp(2),
    borderRadius: wp(4),
    backgroundColor: colors.lightGrey,
    width: '85%',
    alignSelf: 'center',
    fontSize: fontSize(15),
    textAlignVertical: 'top',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
    fontFamily: fontFamily.openSansBold,
    paddingVertical: hp(12),
    color: colors.darkBlue,
  },
  coachfeedBackContainer: {
    width: '85%',
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  coachFeedBackVideoContainer: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: hp(2),
  },

  coachfeedBackTxt: {
    color: colors.backgroundRed,
    fontSize: fontSize(23),
    fontFamily: fontFamily.bold,
  },
  coachfeedBackVideoTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(23),
    fontFamily: fontFamily.bold,
  },
  feedBackTxtContainer: {
    marginVertical: hp(1),
    backgroundColor: colors.lightGrey,
    padding: hp(2.5),
    borderRadius: wp(5),
  },
  feedBackVideoContainer: {
    marginVertical: hp(1),
    width: '85%',
    alignSelf: 'center',
  },
  feedBackTxt: {
    color: colors.darkBlue,
    fontSize: fontSize(15),
    fontFamily: fontFamily.openSansBold,
  },
  playPauseButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playPauseIcon: {
    width: 50,
    height: 50,
  },
  playBtn: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.white,
  },
  pauseBtn: {
    height: wp(10),
    width: wp(10),
    tintColor: colors.backgroundRed,
  },
  profileDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    marginHorizontal: wp(6),
  },
  profilePic: {
    height: wp(25),
    width: wp(25),
    borderRadius: wp(5),
  },
  userNameContainer: {
    marginHorizontal: wp(5),
    width: '60%',
  },
  userNameTxt: {
    fontSize: fontSize(30),
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
  },
  userLocation: {
    fontSize: fontSize(18),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  editBtnContainer: {
    borderRadius: wp(3),
    justifyContent: 'center',
  },
  editTxt: {
    color: colors.lightGreen,
    fontSize: fontSize(16),
    fontFamily: fontFamily.bold,
  },
  nextBtnContainer: {
    borderWidth: 2,
    width: '85%',
    alignSelf: 'center',
    paddingVertical: hp(1.5),
    borderRadius: wp(5),
    borderColor: colors.white,
    backgroundColor: colors.backgroundRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
    flexDirection: 'row',
  },
  nextTxt: {
    fontSize: fontSize(20),
    color: 'white',
    fontFamily: fontFamily.medium,
  },
  downArrow: {
    height: wp(3),
    width: wp(3),
    marginHorizontal: wp(2),
  },
});
export default style;
