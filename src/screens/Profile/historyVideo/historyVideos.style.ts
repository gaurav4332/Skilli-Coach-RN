import {StyleSheet} from 'react-native';
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
  detailsContainer: {
    marginTop: hp(1),
    marginBottom: hp(5),
  },
  titleHeaderContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },

  interestFlatList: {
    marginVertical: hp(1),
    marginHorizontal: wp(3),
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
    margin: wp(1.5),
    marginVertical: 5,
    width: '47%',
    alignSelf: 'center',
    // marginHorizontal: wp(5),
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
    fontFamily: fontFamily.bold,
    color: colors.backgroundRed,
  },
  coachTypeTxt: {
    fontSize: fontSize(16),
    fontFamily: fontFamily.bold,
    color: colors.darkBlue,
  },
  nameDetailContainer: {
    marginVertical: hp(1),
    marginHorizontal: wp(2),
    width: '80%',
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
  noDataContainer: {
    justifyContent: 'center',
    marginVertical: hp(1),
  },
  noDataText: {
    textAlign: 'center',
    fontFamily: fontFamily.openSansBold,
    fontSize: fontSize(15),
    color: colors.lightBlue,
  },
});
export default style;
