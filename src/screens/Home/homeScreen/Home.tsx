import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Video from 'react-native-video';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import style from './home.style';
import {colors} from '../../../helper/utils';
import {hp, wp} from '../../../helper/constants';
import {icons} from '../../../helper/iconConstants';
import TitleHeader from '../../../components/common/TitleHeader';
import CustomLoader from '../../../components/common/CustomLoader';
import {
  getFeedbackCompletedVideo,
  getProfileData,
  getRecentlyCoached,
  getVideoPendingFeedback,
} from '../../../action/DataAction';
import CustomAnimatedBar from '../../../components/common/CustomAnimatedBar';
import {yourSkilliCreditsPoint} from '../../../action/AuthAction';

export default function Home({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const pendingVideo = useSelector(
    state => state.homePage.videoPendingCompletion,
  );
  const completedVideo = useSelector(state => state.homePage.videoCompleted);
  const recenltyCoached = useSelector(state => state.homePage.recenltyCoached);
  const idAndToken = useSelector(state => state.auth?.idAndToken);
  const creditsPoints = useSelector(state => state.data.creditPoints);
  const coachData = useSelector(state => state.auth?.userData);

  console.log(pendingVideo, 'pendingVideo');
  console.log(completedVideo, 'conpltedVideo::::::>>>>>>>>>>');
  console.log(recenltyCoached, 'recenltyCoached');

  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [completedVideoId, setCompleteVideoId] = useState(null);

  useEffect(() => {
    const initialLoaderTimeout = setTimeout(() => {
      setIsInitialLoading(false);
    }, 50);

    return () => clearTimeout(initialLoaderTimeout);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      pendingFeedBackVideoList();
      feedbackCompltedVideos();
      recentlyCoached();
      showCreditsPoints();
      showProfile();
    }, []),
  );
  const showProfile = async () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        user_id: idAndToken || '',
        // token: signUp?.token,
      },
      onSuccess: (res: any) => {
        // setIsAvailableNow(res?.coachesData?.available === 0 ? true : false);
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

  const showCreditsPoints = async () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        user_id: idAndToken || '',
        token: coachData?.token,
      },
      onSuccess: (res: any) => {
        setIsInitialLoading(false);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(yourSkilliCreditsPoint(request));
    setIsInitialLoading(false);
  };
  const pendingFeedBackVideoList = async () => {
    try {
      const request = {
        params: {
          user_id: idAndToken || '',
          userToken: coachData?.token,
        },
        onSuccess: res => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          setIsInitialLoading(false);
        },
      };
      dispatch(getVideoPendingFeedback(request));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const feedbackCompltedVideos = async () => {
    setIsInitialLoading(true);
    try {
      const request = {
        params: {
          user_id: idAndToken || '',
          userToken: coachData?.token,
        },
        onSuccess: res => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          setIsInitialLoading(false);
        },
      };
      dispatch(getFeedbackCompletedVideo(request));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const recentlyCoached = () => {
    setIsInitialLoading(true);
    try {
      const request = {
        params: {
          user_id: idAndToken || '',
          userToken: coachData?.token,
        },
        onSuccess: res => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          setIsInitialLoading(false);
        },
      };
      dispatch(getRecentlyCoached(request));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };
  const completedTogglePause = videoId => {
    if (videoId === completedVideoId) {
      setCompleteVideoId(null);
    } else {
      setCompleteVideoId(videoId);
    }
  };

  const DataItem = ({item}) => {
    const isPlaying = item.student_id === currentlyPlayingVideoId;
    const [loadVideo, setLoadVideo] = useState(false);
    return (
      <Pressable
        style={style.itemContainer}
        onPress={() => onPressCoachFeedBack(item)}>
        <Pressable style={style.btnControllerContainer}>
          {!isPlaying ? (
            <Image
              source={{uri: item?.videos_thumbnail ?? ''}}
              style={style.video}
            />
          ) : (
            <Video
              source={{
                uri: item?.videos ?? '',
              }}
              paused={!isPlaying}
              onTouchStart={() => togglePause(item.student_id)}
              style={style.video}
              resizeMode="cover"
              poster={item.videos_thumbnail ?? ''}
              posterResizeMode="cover"
              onLoadStart={() => setLoadVideo(true)}
              onLoad={() => setLoadVideo(false)}
              playInBackground={false}
              playWhenInactive={false}
            />
          )}
          {loadVideo && (
            <View style={style.btnController}>
              <ActivityIndicator size={'large'} color={colors.white} />
            </View>
          )}
          {!isPlaying && (
            <TouchableOpacity
              onPress={() => togglePause(item.student_id)}
              style={style.btnController}>
              <Image source={icons.playBtn} style={style.playBtn} />
            </TouchableOpacity>
          )}
          <View style={[style.statusContainer, style.completedStatus]}>
            <Text style={style.statusText}>{'Pending'}</Text>
          </View>
        </Pressable>
        <View style={style.nameDetailContainer}>
          <Text style={style.coachNameTxt} numberOfLines={1}>
            {item.studentName ?? ''}
          </Text>
          <View style={style.nameAndStatusContainer}>
            <Text style={style.coachTypeTxt}>{item?.category ?? ''}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const NewDataItem = ({item}) => {
    const isPlaying = item.student_id === completedVideoId;
    const [loadVideo, setLoadVideo] = useState(false);
    return (
      <Pressable
        style={style.itemContainer}
        onPress={() => feedBackCompletedVideo(item)}>
        <Pressable style={style.btnControllerContainer}>
          {!isPlaying ? (
            <Image
              source={{uri: item?.videos_thumbnail ?? ''}}
              style={style.video}
            />
          ) : (
            <Video
              source={{
                uri: item?.videos ?? '',
              }}
              paused={!isPlaying}
              onTouchStart={() => completedTogglePause(item.student_id)}
              style={style.video}
              resizeMode="cover"
              poster={item?.videos_thumbnail ?? ''}
              posterResizeMode="cover"
              onLoadStart={() => setLoadVideo(true)}
              onLoad={() => setLoadVideo(false)}
              playInBackground={false}
              playWhenInactive={false}
            />
          )}
          {loadVideo && (
            <View style={style.btnController}>
              <ActivityIndicator size={'large'} color={colors.white} />
            </View>
          )}
          {!isPlaying && (
            <TouchableOpacity
              onPress={() => completedTogglePause(item.student_id)}
              style={style.btnController}>
              <Image source={icons.playBtn} style={style.playBtn} />
            </TouchableOpacity>
          )}
          <View
            style={[
              style.statusContainer,
              item.feedBackStatus ? style.completedStatus : style.pendingStatus,
            ]}>
            <Text style={style.statusText}>{'Completed'}</Text>
          </View>
        </Pressable>
        <View style={style.nameDetailContainer}>
          <Text style={style.coachNameTxt} numberOfLines={1}>
            {item.studentName ?? ''}
          </Text>
          <View style={style.nameAndStatusContainer}>
            <Text style={style.coachTypeTxt}>{item?.category ?? ''}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const recentViewd = ({item}: any) => {
    return (
      <TouchableOpacity
        style={style.hzFlatListContainer}
        onPress={() => feedBackCompletedVideo(item)}>
        <Image
          source={{uri: item.profile_picture ?? ''}}
          style={style.coachImg}
          resizeMode="cover"
        />
        <View style={style.innerItemContainer}>
          <View style={style.starTxtContainer}>
            <Text style={style.coachNameTxt} numberOfLines={1}>
              {item.name ?? ''}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };
  const onPressSkilliCredits = () => {
    navigation.navigate('TopUpCredits');
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressCoachFeedBack = (item: any) => {
    navigation.navigate('TakeOffCoaching', {data: item});
  };

  const feedBackCompletedVideo = (item: any) => {
    navigation.navigate('CompletedCoachFeedback', {data: item});
  };

  const onPressAllVideo = () => {
    navigation.navigate('HistoryVideos');
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <View style={style.header}>
        <TouchableOpacity style={style.menuContainer}></TouchableOpacity>
        <Text style={[style.userNameText]}>{'Home'}</Text>
        <TouchableOpacity
          onPress={onPressRightBtn}
          style={[style.menuContainer]}>
          <Image
            source={icons.drawerIcon}
            resizeMode={'contain'}
            style={style.menuIcon}
          />
        </TouchableOpacity>
      </View>
      {isInitialLoading ? (
        <View style={style.container}>
          <CustomLoader />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={style.bannerContainer}>
            <Text style={style.bannerTxt}>{'Banner'}</Text>
          </View>
          <View style={style.creditAndTopupContainer}>
            <Text style={style.creditsTxt}>{'Your Skilli Credits'}</Text>
            <TouchableOpacity
              style={style.topUpContainer}
              onPress={onPressSkilliCredits}>
              <Text style={style.topUpTxt}>{'View all'}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.creditsMainContainer}>
            <View style={style.outerCreditContainer}>
              <Text style={style.yourCreditsTxt}>{'Your Skilli Credits'}</Text>
              <View style={style.innerCreditContainer}>
                <Image
                  source={icons.home}
                  style={{height: wp(6.5), width: wp(6.5)}}
                  resizeMode="contain"
                />
                <Text style={style.creditsPointTxt}>
                  {creditsPoints?.coach_score ?? ''}
                </Text>
              </View>
            </View>
          </View>

          <TitleHeader
            title={'FEEDBACK PENDING COMPLETION'}
            titleHeaderContainer={style.titleHeaderContainer}
            onPressRightBtn={() => onPressAllVideo()}
            titleRight={'View All'}
          />
          <FlatList
            scrollEnabled={false}
            data={pendingVideo}
            renderItem={({item}) => <DataItem item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            style={style.interestFlatList}
            ListEmptyComponent={
              <View style={[style.noDataContainer]}>
                <Text style={style.noDataText}>
                  {'No pending completion video found'}
                </Text>
              </View>
            }
          />

          <View style={{marginTop: hp(1.5)}}>
            <TitleHeader
              title={'FEEDBACK COMPLETED'}
              titleHeaderContainer={style.titleHeaderContainer}
              onPressRightBtn={() => onPressAllVideo()}
              titleRight={'View All'}
            />
            <FlatList
              scrollEnabled={false}
              data={completedVideo}
              renderItem={({item}) => <NewDataItem item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              style={style.interestFlatList}
              ListEmptyComponent={
                <View style={[style.noDataContainer]}>
                  <Text style={style.noDataText}>
                    {'No feedback completed video found'}
                  </Text>
                </View>
              }
            />
          </View>
          <View style={style.recentlyContainer}>
            <TitleHeader title="Recently Coached" />
          </View>
          <FlatList
            data={recenltyCoached}
            horizontal
            keyExtractor={item => item.id}
            renderItem={recentViewd}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal: wp(2)}}
            ListEmptyComponent={
              <View style={[style.noDataContainer]}>
                <Text style={style.noDataText}>
                  {'No recently coached data found'}
                </Text>
              </View>
            }
          />
        </ScrollView>
      )}
    </View>
  );
}
