import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';

import Video from 'react-native-video';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import style from './profile.style';
import {colors, fontFamily, fontSize} from '../../helper/utils';
import {icons} from '../../helper/iconConstants';
import Header from '../../components/common/Header';
import CustomSwitch from '../../components/common/CustomSwitch';
import {bioText, dataVideo, dataVideoList} from '../../helper/dataConstants';
import {useDispatch, useSelector} from 'react-redux';
import {getProfileData} from '../../action/DataAction';

import Spinner from 'react-native-loading-spinner-overlay';
import {coachActiveStatus, uploadCertificate} from '../../action/AuthAction';
import {hp} from '../../helper/constants';

export default function Coaches({navigation}: any) {
  const route = useRoute();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const signUp = useSelector(state => state.auth?.userData);
  const abc = useSelector(state => state.data?.profileData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);
  const profileData = abc?.coachesData;

  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [mainLoadVideo, setMainLoadVideo] = useState(false);
  const [firstIsPaused, setFirstIsPaused] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAvailableNow, setIsAvailableNow] = useState(
    profileData?.available === 0 ? true : false,
  );
  const [showFees, setShowFees] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      showProfile();
    }, []),
  );

  const onPressCertificates = () => {
    navigation.navigate('YourCertificates', {profileData});
  };

  const showProfile = async () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        user_id: idAndToken || '',
        // token: signUp?.token,
      },
      onSuccess: (res: any) => {
        setIsAvailableNow(res?.coachesData?.available === 0 ? true : false);
        setIsInitialLoading(false);
      },
      onFail: (error: any) => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getProfileData(request));
    setIsInitialLoading(false);
  };

  const toggleSwitch = () => {
    setIsAvailableNow(!isAvailableNow);
    const request = {
      params: {
        user_id: idAndToken || '',
        token: signUp?.token,
      },
      onSuccess: (res: any) => {
        setIsAvailableNow(!isAvailableNow);
      },
      onFail: (error: any) => {
        setIsInitialLoading(false);
      },
    };
    dispatch(coachActiveStatus(request));
    setIsInitialLoading(false);
  };

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const onPressEditProfile = () => {
    navigation.navigate('EditProfile', {showDownsideView: true});
  };

  const feesRenderItem = ({item}) => (
    <>
      <View style={style.feeContainer}>
        <Text style={style.feeTitleTxt}>{item?.title}</Text>
        <View style={style.feeHomelogoContainer}>
          <FastImage
            source={icons.feeHome}
            style={style.feeHomelogoImg}
            resizeMode="contain"
          />
          <Text style={style.feeTxt} numberOfLines={1}>
            {item?.fee}
          </Text>
        </View>

        {/* Add other fee-related components here if needed */}
      </View>
      <Text style={style.feeDesTxt}>{item?.feedback_description}</Text>
    </>
  );

  const DataItem = ({item}) => {
    const isPlaying = item.id === currentlyPlayingVideoId;
    const [loadVideo, setLoadVideo] = useState(false);
    return (
      // <Pressable style={style.btnControllerContainer}>
      <FastImage source={{uri: item}} style={style.videoListStyle} />
      // </Pressable>
    );
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Your Profile'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <Spinner
        visible={isInitialLoading}
        // textContent={'Loading...'}
        // textStyle={styles.spinnerTextStyle}
      />
      <ScrollView
        style={style.coachContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.hedaerDetailContainer}>
          <View style={style.profileDetails}>
            {profileData?.profile_image === null ? (
              <View style={style.noprofileImg}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: fontFamily.openSansBold,
                    fontSize: fontSize(18),
                  }}>
                  {'No profile photo'}
                </Text>
              </View>
            ) : (
              <FastImage
                source={{
                  uri: profileData?.profile_image,
                }}
                // source={icons.coach7}
                style={style.profileImg}
                resizeMode="cover"
              />
            )}
          </View>

          <View style={style.coachNameTypeContainer}>
            <Text style={style.coachNameTxt}>{profileData?.name || ''}</Text>
            {/* <Text style={style.coachNameTxt}>{'Becky Benson'}</Text> */}
            <Text style={style.coachTypeTxt}>
              {Object.values(profileData?.categories ?? '')?.[0] ?? ''}
            </Text>
          </View>
          {showFees && (
            <View>
              <View style={style.editAndAvailableContainer}>
                <TouchableOpacity
                  style={style.editContainer}
                  onPress={() => onPressEditProfile()}>
                  <Text style={style.editProfileTxt}>{'Edit Profile'}</Text>
                </TouchableOpacity>
                <View>
                  <View style={style.switchContainer}>
                    <Text style={style.availableTxt}>
                      {isAvailableNow ? 'Available' : 'Unavailable'}
                    </Text>

                    <CustomSwitch
                      isOn={isAvailableNow}
                      toggleSwitch={toggleSwitch}
                    />
                  </View>
                </View>
              </View>
              <View style={style.goForIt}>
                <Text style={style.goForItTxt}>{profileData?.quote ?? ''}</Text>
              </View>
              <View style={style.meetCoachContainer}>
                <Text style={style.nameHeaderTxt}>{'Video Intro'}</Text>
                {profileData?.bio_video === null ? (
                  <View style={style.noVideoContainer}>
                    <Text style={style.noVideoTxt}>{'No Video'}</Text>
                  </View>
                ) : (
                  <Pressable
                    style={style.btnControllerContainer}
                    onPress={() => setFirstIsPaused(!firstIsPaused)}>
                    {!isPlaying ? (
                      <FastImage
                        source={{uri: profileData?.bio_video_thumbnails ?? ''}}
                        style={style.video}
                      />
                    ) : (
                      <Video
                        source={{
                          uri: profileData?.bio_video || '',
                        }}
                        paused={firstIsPaused}
                        onTouchStart={() => setFirstIsPaused(firstIsPaused)}
                        style={style.video}
                        resizeMode="cover"
                        posterResizeMode="cover"
                        poster={profileData?.bio_video_thumbnails ?? ''}
                        onLoadStart={() => setMainLoadVideo(true)}
                        onLoad={() => setMainLoadVideo(false)}
                        playInBackground={false}
                        playWhenInactive={false}
                      />
                    )}
                    {mainLoadVideo && !firstIsPaused && (
                      <View style={style.btnController}>
                        <ActivityIndicator
                          size={'large'}
                          color={colors.white}
                        />
                      </View>
                    )}
                    {firstIsPaused && (
                      <TouchableOpacity
                        onPress={() => setFirstIsPaused(!firstIsPaused)}
                        style={style.btnController}>
                        <FastImage
                          source={icons.playBtn}
                          style={style.playBtn}
                        />
                      </TouchableOpacity>
                    )}
                  </Pressable>
                )}
              </View>

              <View style={style.meetCoachContainer}>
                <Text style={style.nameHeaderTxt}>{'Your Bio'}</Text>
                <Text style={style.bioTxt}>
                  {profileData?.general_information || ''}
                </Text>
              </View>

              {/* <View style={style.bioContainer}>
                <Text style={style.nameHeaderTxt}>{'Your Bio'}</Text>
                <View style={style.bioInnerContainer}>
                  <View style={style.bioTitleContainer}>
                    <Text style={style.bioTitleTxt}>
                      {'General Information & Achievements'}
                    </Text>
                  </View>
                  <Text style={style.bioTxt}>
                    {profileData?.general_information}
                  </Text>
                  <View style={style.bioTitleContainer}>
                    <Text style={style.bioTitleTxt}>
                      {'Affiliation and Club Memberships'}
                    </Text>
                  </View>
                  <Text style={style.bioTxt}>
                    {profileData?.club_memberships}
                  </Text>
                  <View style={style.bioTitleContainer}>
                    <Text style={style.bioTitleTxt}>
                      {'Special Coaching Interests'}
                    </Text>
                  </View>
                  <Text style={style.bioTxt}>
                    {profileData?.coaching_interests}
                  </Text>
                </View>
              </View> */}

              <View style={style.videoList}>
                <FlatList
                  horizontal
                  data={profileData?.images}
                  renderItem={({item}) => <DataItem item={item} />}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            style={style.certificateBtn}
            onPress={onPressCertificates}>
            <Text style={style.certificateTxt}>{'Your Certificates'}</Text>
          </TouchableOpacity>

          <View style={style.meetCoachContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.nameHeaderTxt}>{'Your Coach Fees'}</Text>
              <TouchableOpacity
                style={style.editContainer}
                onPress={() => onPressEditProfile()}>
                <Text style={style.editProfileTxt}>{'Edit'}</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={profileData?.coach_fees}
              keyExtractor={(item, index) => index.toString()}
              renderItem={feesRenderItem}
              ListEmptyComponent={() => (
                <View style={{marginVertical: hp(3)}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: fontSize(15),
                      color: colors.lightBlue,
                      fontFamily: fontFamily.openSansBold,
                    }}>
                    {'Opps! you currenty not have coaching fees'}
                  </Text>
                </View>
              )}
            />
          </View>
          {/* <View style={style.meetCoachContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.nameHeaderTxt}>{'Your Coach Fees'}</Text>
              <TouchableOpacity
                style={style.editContainer}
                onPress={() => onPressEditProfile()}>
                <Text style={style.editProfileTxt}>{'Edit'}</Text>
              </TouchableOpacity>
            </View>
            <View style={style.outerFeeContainer}>
              <View style={style.feeContainer}>
                <Text style={style.feeTitleTxt}>{'Fee 1'}</Text>
                <View style={style.feeHomelogoContainer}>
                  <FastImage
                    source={icons.feeHome}
                    style={style.feeHomelogoImg}
                    resizeMode="contain"
                  />
                  <Text style={style.feeTxt}>{'50'}</Text>
                </View>
              </View>
              <Text style={style.feeDesTxt}>{bioText}</Text>

              <View style={style.feeContainer}>
                <Text style={style.feeTitleTxt}>{'Fee 1'}</Text>
                <View style={style.feeHomelogoContainer}>
                  <FastImage
                    source={icons.feeHome}
                    style={style.feeHomelogoImg}
                    resizeMode="contain"
                  />
                  <Text style={style.feeTxt}>{'50'}</Text>
                </View>
              </View>
              <Text style={style.feeDesTxt}>{bioText}</Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  thumbnailPreview: {
    padding: 20,
    alignItems: 'center',
  },
  thumbnailImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  thumbnailInfo: {
    color: 'darkblue',
  },
  thumbnailError: {
    color: 'crimson',
  },
});
