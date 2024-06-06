import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/common/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import TitleHeader from '../../../components/common/TitleHeader';
import style from './historyVideos.style';
import {
  dataTopUpCompletedVideo,
  dataTopUpVideo,
  dataVideo,
} from '../../../helper/dataConstants';
import Video from 'react-native-video';
import {icons} from '../../../helper/iconConstants';
import CustomLoader from '../../../components/common/CustomLoader';
import {colors} from '../../../helper/utils';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFeedbackCompletedVideo,
  getVideoPendingFeedback,
} from '../../../action/DataAction';

export default function HistoryVideos({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const pendingVideo = useSelector(
    state => state.homePage.videoPendingCompletion,
  );
  const completedVideo = useSelector(state => state.homePage.videoCompleted);
  const coachData = useSelector(state => state.auth.userData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const [isPaused, setIsPaused] = useState(true);
  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [completedVideoId, setCompleteVideoId] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      pendingFeedBackVideoList();
      feedbackCompltedVideos();
    }, []),
  );

  const pendingFeedBackVideoList = async () => {
    try {
      const request = {
        params: {
          user_id: idAndToken ?? '',
          userToken: coachData?.token,
        },
        onSuccess: res => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          console.log('Fail');
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
          user_id: coachData?.user?.id || '',
          userToken: coachData?.token,
        },
        onSuccess: res => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          console.log('Fail');
          setIsInitialLoading(false);
        },
      };
      dispatch(getFeedbackCompletedVideo(request));
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

  const feedBackCompletedVideo = (item: any) => {
    navigation.navigate('CompletedCoachFeedback', {data: item});
  };

  const feedBackPendingVideo = (item: any) => {
    navigation.navigate('TakeOffCoaching', {data: item});
  };

  const DataItem = ({item}) => {
    const isPlaying = item?.student_id === currentlyPlayingVideoId;
    const [loadVideo, setLoadVideo] = useState(false);
    return (
      <Pressable
        style={style.itemContainer}
        onPress={() => feedBackPendingVideo(item)}>
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
              onTouchStart={() => togglePause(item?.student_id)}
              style={style.video}
              resizeMode="cover"
              poster={item?.videos_thumbnail ?? ' '}
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
    console.log('====================================');
    console.log(item, 'ITEMMMMM????????');
    console.log('====================================');
    const isPlaying = item?.student_id === completedVideoId;
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
                uri: item.videos,
              }}
              paused={!isPlaying}
              onTouchStart={() => completedTogglePause(item?.student_id)}
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
              onPress={() => completedTogglePause(item?.student_id)}
              style={style.btnController}>
              <Image source={icons.playBtn} style={style.playBtn} />
            </TouchableOpacity>
          )}
          <View style={[style.statusContainer, style.pendingStatus]}>
            <Text style={style.statusText}>{'Completed'}</Text>
          </View>
        </Pressable>
        <View style={style.nameDetailContainer}>
          <Text style={style.coachNameTxt} numberOfLines={1}>
            {item?.studentName ?? ''}
          </Text>
          <View style={style.nameAndStatusContainer}>
            <Text style={style.coachTypeTxt} numberOfLines={1}>
              {item?.category ?? ''}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  const onPressAllVideo = () => {
    navigation.navigate('HistoryVideos');
  };
  const onPressCoachFeedBack = (item: any) => {
    navigation.navigate('CoachFeedBack', {data: item});
  };

  const onPressRightBtn = () => {
    navigation.toggleDrawer();
  };

  const onPressBack = () => {
    goBack();
  };
  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'History'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />
      {isInitialLoading ? (
        <View style={style.container}>
          <CustomLoader />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <TitleHeader
            title={'FEEDBACK PENDING COMPLETION'}
            titleHeaderContainer={style.titleHeaderContainer}
          />
          <FlatList
            // scrollEnabled={false}
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

          <TitleHeader
            title={'FEEDBACK COMPLETED'}
            titleHeaderContainer={style.titleHeaderContainer}
            onPressRightBtn={() => onPressAllVideo()}
          />
          <View style={{flex: 1}}>
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
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
