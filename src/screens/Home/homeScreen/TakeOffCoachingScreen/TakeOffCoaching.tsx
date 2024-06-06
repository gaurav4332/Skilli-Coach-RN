import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
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
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Video from 'react-native-video';

import style from '../TakeOffCoachingScreen/takeOffCoaching.style';
import Header from '../../../../components/common/Header';
import {icons} from '../../../../helper/iconConstants';
import {colors} from '../../../../helper/utils';
import {launchImageLibrary} from 'react-native-image-picker';
import NextButton from '../../../../components/auth/NextButton';
import {bioText} from '../../../../helper/dataConstants';
import {getStudentDetails} from '../../../../action/DataAction';
import {useDispatch, useSelector} from 'react-redux';
import {
  acceptRequest,
  coachSessionFeedback,
  dennyRequest,
} from '../../../../action/AuthAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {isEmpty} from 'lodash';
import {GET_COACH_FEEDBACK_DATA} from '../../../../action/types';
import FastImage from 'react-native-fast-image';

export default function TakeOffCoaching({navigation}: any) {
  const route = useRoute();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const {data} = route.params;

  console.log('====================================');
  console.log(data, 'LOG in take off coaching::::::>>>>>>');
  console.log('====================================');

  const userData = useSelector(state => state.auth.userData);

  const signUp = useSelector(state => state.auth?.userData);

  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const studentData = useSelector(state => state.homePage?.studentDetails);

  console.log('====================================');
  console.log(studentData?.videos_thumbnail, 'Student ++++++++++');
  console.log('====================================');

  useFocusEffect(
    React.useCallback(() => {
      getStudentData();
    }, []),
  );

  const [isPaused, setIsPaused] = useState(true);
  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [coachingSessionStarted, setCoachingSessionStarted] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const [showAcceptDenyButtons, setShowAcceptDenyButtons] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [coachFeedBack, setCoachFeedBack] = useState('');
  // const [studentData, setStudentData] = useState('');

  const getStudentData = () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        student_id: data,
        coach_id: idAndToken,
        token: userData?.token,
      },
      onSuccess: res => {
        setIsInitialLoading(false);
        // setStudentData(res);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getStudentDetails(request));
  };

  const handleStartCoachingSession = () => {
    setCoachingSessionStarted(true);
  };

  const handleAccept = () => {
    // setIsInitialLoading(true);
    setShowStartButton(true);
    setShowAcceptDenyButtons(false);
    const request = {
      params: {
        student_id: data,
        coach_id: idAndToken,
        // token: userData?.token,
      },
      onSuccess: res => {
        setIsInitialLoading(false);
        setCoachingSessionStarted(true);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
        setCoachingSessionStarted(true);
      },
    };
    dispatch(acceptRequest(request));
    // setIsInitialLoading(false);
  };

  const handleDeny = () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        student_id: data,
        coach_id: idAndToken,
        token: userData?.token,
      },
      onSuccess: res => {
        setIsInitialLoading(false);
        setShowStartButton(false);
        setShowAcceptDenyButtons(false);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
        setShowStartButton(false);
        setShowAcceptDenyButtons(false);
      },
    };
    dispatch(dennyRequest(request));
    setIsInitialLoading(false);
  };

  const onPressSubmit = () => {
    if (isEmpty(coachFeedBack)) {
      Alert.alert('Please write your feedback');
    } else if (selectedImage === null) {
      Alert.alert('Please upload feedback video');
    } else {
      setIsInitialLoading(true);
      const requestData = new FormData();
      requestData.append('coach_feedback', coachFeedBack);
      requestData.append('coach_feedback_video', {
        uri: selectedImage?.uri,
        type: selectedImage?.type,
        name: selectedImage?.fileName,
      });

      const feedbackData = {
        coachFeedBack,
        uri: selectedImage?.uri,
        type: selectedImage?.type,
        name: selectedImage?.fileName,
      };

      const request = {
        params: {
          student_id: data,
          coach_id: idAndToken,
          token: userData?.token,
        },
        data: requestData,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
        },
      };
      dispatch(coachSessionFeedback(request));
      // dispatch({type: GET_COACH_FEEDBACK_DATA, payload: feedbackData});
    }
  };

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };
  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'video',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let uri = response?.assets?.[0]?.uri;
        let type = response?.assets?.[0]?.type;
        let fileName = response?.assets?.[0]?.fileName;
        setSelectedImage({uri, type, fileName});
      }
    });
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const backIcon = () => {
    goBack();
  };
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === 'ios' && 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <Spinner visible={isInitialLoading} />
        <Header
          title={'Coaching Session'}
          rightContainer={style.rightContainer}
          onPressBack={() => backIcon()}
          onPressRightBtn={() => onPressRightBtn()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={style.detailsContainer}>
          <View style={style.feebackContainer}>
            <View style={style.creditsAndTopupContainer}>
              <Text style={style.skilliCreditsTxt}>{'Take Off Coaching'}</Text>
              <View style={style.pedingFeedbackView}>
                <Text style={style.pendingVideoTxt}>{'Pending Feedback'}</Text>
              </View>
            </View>
          </View>

          <View style={style.profileDetailContainer}>
            <Image
              source={{uri: studentData?.profile_picture} || ''}
              style={style.profilePic}
              resizeMode="cover"
            />
            <View style={style.userNameContainer}>
              <Text style={style.userNameTxt} numberOfLines={1}>
                {studentData?.student_name || ''}
              </Text>
              <Text style={style.userLocation} numberOfLines={1}>
                {studentData?.address || ''}
              </Text>
              <View style={style.editBtnContainer}>
                <Text style={style.editTxt}>
                  {studentData?.skill_level || ''}
                </Text>
              </View>
            </View>
          </View>
          {showAcceptDenyButtons && (
            <View style={style.requestBtnContainer}>
              <TouchableOpacity style={style.button} onPress={handleAccept}>
                <Text style={style.buttonText}>{'Accept'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.denyButton} onPress={handleDeny}>
                <Text style={style.buttonText}>{'Deny'}</Text>
              </TouchableOpacity>
            </View>
          )}

          {showStartButton && (
            <TouchableOpacity
              style={style.singleButton}
              onPress={handleStartCoachingSession}>
              <Text style={style.buttonText}>{'Start Coaching Session'}</Text>
            </TouchableOpacity>
          )}

          <View style={style.feedBackVideoContainer}>
            <Pressable
              style={style.btnControllerContainer}
              onPress={() => setIsPaused(!isPaused)}>
              <Video
                source={{
                  uri: studentData?.videos || '',
                }}
                paused={isPaused}
                onTouchStart={togglePause}
                style={style.video}
                resizeMode="cover"
                posterResizeMode="cover"
                poster={studentData?.videos_thumbnail ?? ''}
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

          <View style={style.textInputStyle}>
            <Text style={style.whatFeedBackTxt}>
              {'What feedback they are looking for'}
            </Text>
            <Text style={style.whatFeedBackTxt}>
              {studentData?.improve_sport_skill || ''}
            </Text>
          </View>

          {coachingSessionStarted && (
            <View>
              <View style={style.feebackContainer}>
                <View style={style.creditsAndTopupContainer}>
                  <Text style={style.coachFeedBackTxt}>
                    {"Coach's Feedback"}
                  </Text>
                </View>
              </View>
              <TextInput
                placeholder={'Please write your comments here'}
                style={style.coachCommentStyle}
                placeholderTextColor={colors.darkBlue}
                multiline
                onChangeText={(text: any) => setCoachFeedBack(text)}
              />

              <View style={style.feebackContainer}>
                <View style={style.creditsAndTopupContainer}>
                  <Text style={style.skilliCreditsTxt}>
                    {"Coach's Feedback Video"}
                  </Text>
                </View>
              </View>
              {selectedImage ? (
                <TouchableOpacity onPress={() => handleCameraLaunch()}>
                  <Video
                    source={{uri: selectedImage?.uri}}
                    style={style.uploadedPhotoView}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={style.uploadPhotoView}
                  onPress={() => handleCameraLaunch()}>
                  <View style={style.addIconContainer}>
                    <Image
                      source={icons.addIcon}
                      style={style.addIconStyle}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={style.uploadPhotoTxt}>{'Upload Video'}</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[style.btnContainer, style.bottomButton]}
                onPress={() => onPressSubmit()}>
                <Text style={style.nextTxt}>{'Submit'}</Text>
              </TouchableOpacity>

              {/* <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                  style={[style.btnContainer, style.bottomButton]}>
                  <Text style={style.nextTxt}>{'Save Draft'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[style.btnContainer, style.bottomButton]}
                  onPress={() => onPressSubmit()}>
                  <Text style={style.nextTxt}>{'Submit'}</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
