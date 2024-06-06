import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './completedCoachFeedback.style';
import Header from '../../../../components/common/Header';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Video from 'react-native-video';
import {colors, fontFamily} from '../../../../helper/utils';
import {icons} from '../../../../helper/iconConstants';

import {useDispatch, useSelector} from 'react-redux';
import {sessionFeedBackDetails} from '../../../../action/DataAction';
import {feedbackCompleted} from '../../../../action/AuthAction';
import VideoModal from '../../../../components';
import {hp, wp} from '../../../../helper/constants';

export default function CompletedCoachFeedback({navigation}: any) {
  const {goBack} = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {data} = route.params;

  const userData = useSelector(state => state.auth.userData);

  const profileData = useSelector(state => state.data?.profileData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const showFeedbackSession = useSelector(
    state => state.data?.showFeedbackSession,
  );

  const [isPaused, setIsPaused] = useState(false);
  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      sessionDetails();
    }, []),
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelect = value => {
    setSelectedValue(value);
    setIsInitialLoading(true);

    let requestData = new FormData();

    requestData.append('studentId', data?.student_id);
    requestData.append('coachId', idAndToken);
    requestData.append('status', value);

    const request = {
      params: {
        student_id: data?.student_id || '',
        coach_id: data?.coach_id || '',
        // token: userData?.token,
      },
      data: requestData,
      onSuccess: (res: any) => {
        setIsInitialLoading(false);
        setModalVisible(false);
      },
      onFail: (error: any) => {
        console.log('Fail:::markAsFeedbackCompleted');
        setIsInitialLoading(false);
        setModalVisible(false);
      },
    };
    dispatch(feedbackCompleted(request));
    setIsInitialLoading(false);
  };

  const sessionDetails = () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        student_id: data?.student_id || '',
        coach_id: data?.coach_id || '',
        token: profileData?.token,
      },
      onSuccess: (res: any) => {
        // setProfileData(res?.coachesData);
        setIsInitialLoading(false);
      },
      onFail: (error: any) => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(sessionFeedBackDetails(request));
    // setIsInitialLoading(false);
  };

  const markAsFeedbackCompleted = () => {
    setModalVisible(true);
  };

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const backIcon = () => {
    goBack();
  };

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Coaching Session'}
        rightContainer={style.rightContainer}
        onPressBack={() => backIcon()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={style.feebackContainer}>
          <View style={style.creditsAndTopupContainer}>
            <Text style={style.skilliCreditsTxt}>{'Take Off Coaching'}</Text>
            <View style={style.pedingFeedbackView}>
              <Text style={style.pendingVideoTxt}>{'Completed'}</Text>
            </View>
          </View>
        </View>

        <View style={style.profileDetailContainer}>
          <Image
            source={{uri: showFeedbackSession?.profile_picture ?? ''}}
            style={style.profilePic}
            resizeMode="cover"
          />
          <View style={style.userNameContainer}>
            <Text style={style.userNameTxt} numberOfLines={1}>
              {showFeedbackSession?.student_name ?? ''}
            </Text>
            <Text style={style.userLocation} numberOfLines={1}>
              {showFeedbackSession?.address ?? ''}
            </Text>
            <View style={style.editBtnContainer}>
              <Text style={style.editTxt}>
                {showFeedbackSession?.skill_level ?? ''}
              </Text>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity
          style={[style.nextBtnContainer]}
          onPress={markAsFeedbackCompleted}>
          <Text style={style.nextTxt}>{'Mark as'}</Text>
          <Image
            source={icons.downArrow}
            style={style.downArrow}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
        <VideoModal
          isVisible={modalVisible}
          onClose={closeModal}
          onButtonPress={closeModal}
          onSelect={handleSelect}
        />
        {/* <View style={style.meetCoachContainer}> */}
        <View style={style.feedBackVideoContainer}>
          <Pressable
            style={style.btnControllerContainer}
            onPress={() => setIsPaused(!isPaused)}>
            <Video
              source={{
                uri: showFeedbackSession?.videos,
              }}
              paused={isPaused}
              onTouchStart={togglePause}
              style={style.video}
              resizeMode="cover"
              posterResizeMode="cover"
              poster={showFeedbackSession?.videos_thumbnail ?? ''}
            />
            {isPaused && (
              <TouchableOpacity
                onPress={() => setIsPaused(!isPaused)}
                style={style.btnController}>
                <Image source={icons.playBtn} style={style.playBtn} />
              </TouchableOpacity>
            )}
            {isPaused && (
              <View
                style={{
                  position: 'absolute',
                  bottom: hp(3),
                  left: wp(5),
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.openSansBold,
                    color: colors.lightGreen,
                  }}>
                  {showFeedbackSession?.video_duration ?? ''}
                </Text>
              </View>
            )}
          </Pressable>
        </View>
        {/* </View> */}
        <View
          style={{
            borderRadius: wp(4),
            marginVertical: hp(2),
            backgroundColor: colors.lightGrey,
            width: '85%',
            alignSelf: 'center',
          }}>
          <Text style={style.textInputStyle}>
            {showFeedbackSession?.improve_sport_skill ?? ''}
          </Text>
        </View>

        <View style={style.coachfeedBackContainer}>
          <Text style={style.coachfeedBackTxt}>{'Coach Feedback'}</Text>
          <View style={style.feedBackTxtContainer}>
            <Text style={style.feedBackTxt}>
              {showFeedbackSession?.coach_feedback ?? ''}
            </Text>
          </View>
        </View>
        <View style={style.coachfeedBackContainer}>
          <Text style={style.coachfeedBackVideoTxt}>
            {'Coach Feedback Video'}
          </Text>
          <View style={style.coachFeedBackVideoContainer}>
            <Pressable
              style={style.btnControllerContainer}
              onPress={() => setIsPaused(!isPaused)}>
              <Video
                source={{
                  uri: showFeedbackSession?.coach_feedback_video ?? '',
                }}
                paused={isPaused}
                onTouchStart={togglePause}
                style={style.video}
                resizeMode="cover"
                posterResizeMode="cover"
                poster={
                  showFeedbackSession?.coach_feedback_video_thumbnail ?? ''
                }
              />
              {isPaused && (
                <TouchableOpacity
                  onPress={() => setIsPaused(!isPaused)}
                  style={style.btnController}>
                  <Image source={icons.playBtn} style={style.playBtn} />
                </TouchableOpacity>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
