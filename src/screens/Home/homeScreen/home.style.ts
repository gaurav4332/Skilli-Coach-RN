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
  header: {
    marginTop: hp(1),
    alignItems: 'center',
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  menuContainer: {
    width: wp(10.67),
    height: wp(10.67),
    borderRadius: wp(100),
    justifyContent: 'center',
  },
  menuIcon: {
    width: wp(5.33),
    height: wp(5.33),
  },
  userNameText: {
    color: colors.backgroundRed,
    fontSize: fontSize(24),
    fontFamily: fontFamily.bold,
  },
  bannerContainer: {
    marginVertical: hp(3),
    borderWidth: 2,
    borderColor: colors.lightGreen,
    paddingVertical: hp(5),
    marginHorizontal: wp(5),
    borderRadius: wp(5),
  },
  bannerTxt: {
    alignSelf: 'center',
    fontSize: fontSize(24),
    color: colors.backgroundRed,
    fontFamily: fontFamily.bold,
  },
  seekingContainer: {
    paddingVertical: hp(1.5),
    backgroundColor: colors.lightGrey,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  seekingTxt: {
    textAlign: 'center',
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
    fontSize: fontSize(17),
  },
  recentFlatListContainer: {
    marginHorizontal: wp(1),
  },
  skillItem: {
    padding: hp(1.7),
    paddingHorizontal: wp(10),
    backgroundColor: colors.backgroundRed,
    marginLeft: wp(5),
    borderRadius: wp(4),
    marginTop: hp(1),
  },
  selectedSkill: {
    backgroundColor: colors.lightGreen,
  },
  selectedText: {
    color: 'white',
    fontSize: fontSize(20),
    fontFamily: fontFamily.bold,
  },
  flatListContainer: {
    marginVertical: hp(1),
  },
  coachItem: {
    paddingVertical: hp(3),
    borderRadius: wp(2),
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: wp(1),
    alignSelf: 'center',
  },

  skillItemss: {
    paddingVertical: hp(5),
    paddingHorizontal: wp(10),
    backgroundColor: colors.white,
    borderRadius: wp(4),
    borderWidth: 1,
  },
  containerFlat: {
    backgroundColor: colors.white,
    width: '45%',
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: colors.lightGreen,
  },

  title: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.darkBlue,
  },
  outerItemContainer: {
    width: wp(45),
    backgroundColor: colors.white,
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: colors.lightGreen,
    marginTop: hp(0.5),
  },
  innerItemContainer: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(1),
    marginLeft: wp(3),
  },
  starTxtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starIcon: {
    height: wp(5),
    width: wp(5),
    marginRight: wp(2),
  },
  selectedItem: {
    borderColor: colors.lightGreen,
  },
  coachImg: {
    width: '100%',
    height: hp(12),
    borderRadius: wp(4.7),
  },
  hzFlatListContainer: {
    borderWidth: 1,
    borderRadius: wp(5),
    borderColor: colors.lightGreen,
    marginLeft: wp(2),
    width: wp(45),
    marginVertical: hp(2),
  },
  creditAndTopupContainer: {
    flexDirection: 'row',
    marginVertical: hp(1.5),
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
  creditsTxt: {
    fontSize: fontSize(20),
    color: colors.darkBlue,
    fontFamily: fontFamily.bold,
  },
  topUpContainer: {
    justifyContent: 'center',
    width: '20%',
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
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  staticBarImg: {
    height: hp(3.64),

    width: '90%',
    alignSelf: 'center',
  },
  renderContainer: {
    flex: 1,
    marginHorizontal: wp(1),
    justifyContent: 'center',
    marginBottom: hp(2),
    backgroundColor: colors.darkBlue,
    height: hp(5),
    borderRadius: wp(3),
  },
  titleHeaderContainer: {
    marginHorizontal: wp(5),
    marginTop: hp(1),
  },
  interestContainer: {
    marginBottom: hp(5),
  },
  interestFlatList: {
    marginVertical: hp(1),
    width: '95%',
    alignSelf: 'center',
  },
  creditsMainContainer: {
    borderWidth: 1,
    marginHorizontal: wp(5),
    height: hp(7),
    borderRadius: wp(4),
    borderColor: colors.lightGreen,
    marginBottom: hp(1.5),
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
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: hp(1),
    marginHorizontal: wp(5),
    width: '100%',
  },
  noDataText: {
    textAlign: 'center',
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(15),
    color: colors.lightBlue,
  },
  skillTxt: {
    color: colors.white,
    fontSize: fontSize(14),
    fontFamily: fontFamily.bold,
    textAlign: 'center',
  },
  videoListContainer: {},
  itemContainer: {
    borderWidth: 1,
    borderColor: colors.lightGreen,
    borderRadius: wp(3),
    marginHorizontal: 5,
    marginVertical: 5,
    width: wp(45),
  },
  video: {
    height: hp(12.5),
    width: '100%',
    borderRadius: wp(3),
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
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
    width: '80%',
  },
  coachTypeTxt: {
    fontSize: fontSize(14),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  nameDetailContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(2),
  },
  statusText: {
    fontSize: fontSize(8),
    color: colors.white,
    fontWeight: '600',
  },
  statusContainer: {
    width: '30%',
    height: hp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    position: 'absolute',
    top: hp(1),
    right: wp(1),
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
  recentlyContainer: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
  },
});
export default style;
