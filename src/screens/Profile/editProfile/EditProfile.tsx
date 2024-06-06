import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import style from './editProfile.style';
import Header from '../../../components/common/Header';
import {icons} from '../../../helper/iconConstants';
import ProfileTextInput from '../../../components/common/ProfileTextInput';
import {colors, fontFamily} from '../../../helper/utils';
import {
  dataGender,
  dataLanguages,
  dataSkills,
} from '../../../helper/dataConstants';
import NextButton from '../../../components/auth/NextButton';
import {launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {hp, wp} from '../../../helper/constants';
import {useDispatch, useSelector} from 'react-redux';
import {userUpdate} from '../../../action/AuthAction';

import VideoModal from '../../../components/common/VideoModal';
import {verifyEmail} from '../../../helper/Global';

import {isEmpty} from 'lodash';
import Video from 'react-native-video';
import {Dropdown} from 'react-native-element-dropdown';
import Spinner from 'react-native-loading-spinner-overlay';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GET_SHOW_SKILL_CATEGORY} from '../../../action/types';
import {getSkillCategory} from '../../../action/DataAction';

export default function EditProfile({route, navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const abc = useSelector(state => state.data.profileData);
  const idAndToken = useSelector(state => state.auth?.idAndToken);
  const signUp = useSelector(state => state.auth.userData);
  const coachId = useSelector(state => state.auth.userData);
  // const categories = useSelector(state => state.data.skillCategoriesData);

  // console.log('====================================');
  // console.log(categories, 'Cate ++++++++>>>>>>>');
  // console.log('====================================');

  const profileData = abc?.coachesData;

  console.log('====================================');
  console.log(
    profileData?.images,
    'profileData?.images?.profileData?.images::>>>>>',
  );
  console.log('====================================');

  const userToken = abc?.token;
  let id = idAndToken;

  let defaultCategories = Object.keys(profileData?.categories ?? {});
  const cat = defaultCategories[0] || '';

  const [valueGender, setValueGender] = useState(profileData?.gender);
  const [valueLanguage, setValueLanguage] = useState(
    profileData?.languages_spoken?.[0],
  );
  const [skills, setSkills] = useState(cat || '');
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [images, setImages] = useState(profileData?.images ?? []);
  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDOB, setShowDOB] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [name, setName] = useState(profileData?.name);
  const [email, setEmail] = useState(profileData?.email);
  const [phoneNumber, setPhoneNumber] = useState(profileData?.phone);
  const [generalInfoBio, setGeneralInfoBio] = useState(
    profileData?.coaching_interests || '',
  );
  const [affiliationBio, setAffilationBio] = useState(
    profileData?.club_memberships || '',
  );
  const [coachingIntrestBio, setCoachingIntrestBio] = useState(
    profileData?.coaching_interests || '',
  );

  const [coach1Name, setCoach1Name] = useState(
    profileData?.coach_fees?.[0]?.title ?? '',
  );
  const [coach1Fee, setCoach1Fee] = useState<any>(
    JSON.stringify(profileData?.coach_fees?.[0]?.fee) ?? '',
  );
  const [coach1Duration, setCoach1Duration] = useState(
    profileData?.coach_fees?.[0]?.coaching_session_duration ?? '',
  );
  const [coach1Feedback, setCoach1Feedback] = useState(
    profileData?.coach_fees?.[0]?.feedback_description ?? '',
  );

  const [coach2Name, setCoach2Name] = useState(
    profileData?.coach_fees?.[1]?.title ?? '',
  );
  const [coach2Fee, setCoach2Fee] = useState(
    JSON.stringify(profileData?.coach_fees?.[1]?.fee) ?? '',
  );
  const [coach2Duration, setCoach2Duration] = useState(
    profileData?.coach_fees?.[1]?.coaching_session_duration ?? '',
  );
  const [coach2Feedback, setCoach2Feedback] = useState(
    profileData?.coach_fees?.[1]?.feedback_description ?? '',
  );

  useEffect(() => {
    skillCategory();
  }, []);

  const skillCategory = async () => {
    setIsInitialLoading(true);
    const request = {
      onSuccess: res => {
        const categoryNames = res?.category;
        setCategories(categoryNames);
        console.log(categoryNames, 'ononSuccess resposes');
        setIsInitialLoading(false);
        dispatch({
          type: GET_SHOW_SKILL_CATEGORY,
          payload: res?.category,
        });
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getSkillCategory(request));
  };

  const formatDate = date => {
    if (date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDay = day < 10 ? `0${day}` : `${day}`;
      const formattedMonth = month < 10 ? `0${month}` : `${month}`;
      return `${formattedDay}-${formattedMonth}-${year}`;
    } else {
      return profileData?.dob;
    }
  };

  const toggleDatePicker = () => {
    setOpen(!open);
  };

  const getCurrentDateFormatted = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (newDate: any) => {
    setSelectedDate(newDate);
    setShowDOB(false);
    setOpen(false);
  };

  const togglePause = (videoId: any) => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };

  const handleCameraLaunch = () => {
    setIsInitialLoading(true);
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        setIsInitialLoading(false);
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        setIsInitialLoading(false);
      } else {
        let uri = response?.uri || response.assets?.[0]?.uri;
        let type = response?.assets?.[0]?.type;
        let fileName = response?.assets?.[0]?.fileName;
        setSelectedImage({uri, type, fileName});
        setIsInitialLoading(false);
      }
    });
    setIsInitialLoading(false);
  };
  const handleUploadPhoto = () => {
    setIsInitialLoading(true);
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        setIsInitialLoading(false);
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        setIsInitialLoading(false);
      } else {
        const newImages = [...images, response.assets?.[0]?.uri];
        console.log('ImagePicker Response:', response.assets?.[0]?.uri);
        setImages(newImages);
        setIsInitialLoading(false);
      }
    });
    setIsInitialLoading(false);
  };

  const handelChooseVideo = () => {
    setIsInitialLoading(true);
    setIsPaused(!isPaused);
    const options = {
      mediaType: 'video',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        setIsInitialLoading(false);
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        setIsInitialLoading(false);
      } else {
        let uri = response.uri || response.assets?.[0]?.uri;
        let type = response?.assets?.[0]?.type;
        let fileName = response?.assets?.[0]?.fileName;
        setSelectedVideo({uri, type, fileName});
        setIsInitialLoading(false);
      }
    });
    setIsInitialLoading(false);
  };

  const onChangeName = (text: any) => {
    setName(text);
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const handleDeletePhoto = (indexToRemove: any) => {
    const updatedImages = images.filter((_, index) => index !== indexToRemove);
    setImages(updatedImages);
    console.log('====================================');
    console.log(updatedImages, 'updateImages ++++');
    console.log('====================================');
  };

  const onPressSave = () => {
    const concatenatedBio = `${generalInfoBio} ${affiliationBio} ${coachingIntrestBio}`;
    const currentDate = getCurrentDateFormatted();

    const today = new Date();
    const minimumDOB = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    if (isEmpty(name)) {
      Alert.alert('* Please enter name');
    } else if (isEmpty(email)) {
      Alert.alert('* Please enter email');
    } else if (!verifyEmail(email)) {
      Alert.alert('* Please enter a Valid Email');
    } else if (skills.length === 0) {
      Alert.alert('Please select a skill');
    } else if (isEmpty(concatenatedBio)) {
      Alert.alert('Please enter a bio');
    } else if (selectedDate > minimumDOB) {
      Alert.alert('You must be over 18');
    } else if (
      coach1Name === '' ||
      coach1Fee === '' ||
      coach1Duration === '' ||
      coach1Feedback === ''
    ) {
      Alert.alert('Please fill in all fields for fees');
    } else if (
      coach2Name === '' ||
      coach2Fee === '' ||
      coach2Duration === '' ||
      coach2Duration === ''
    ) {
      Alert.alert('Please fill in all fields for Coach 2');
    } else {
      setIsInitialLoading(true);
      let data = new FormData();
      data.append('name', name);
      data.append('categories[0]', skills);
      data.append('email', email);
      data.append('phone', phoneNumber);
      data.append('dob', formatDate(selectedDate));
      data.append('gender', valueGender);
      data.append('languages_spoken', valueLanguage);
      // images.forEach((image, index) => {
      //   data.append(`images[${index}]`, {
      //     uri: image ?? profileData?.images,
      //     type: 'image/jpeg' ?? profileData?.images,
      //     name: `${index}.jpeg` ?? `${currentDate}-images.jpeg`,
      //   });
      // });
      if (selectedVideo?.uri ?? profileData?.bio_video) {
        data.append('bio[bio_video]', {
          uri: selectedVideo?.uri ?? profileData?.bio_video,
          type:
            selectedVideo?.type ||
            'video/mp4' ||
            'video/mp4' ||
            'video/ogx' ||
            'video/oga' ||
            'video/ogv' ||
            'video/ogg' ||
            'video/webm' ||
            'video/mov',
          name: selectedVideo?.fileName ?? `${currentDate}-bio_video.mp4`,
        });
      }
      data.append('bio[bio]', concatenatedBio);
      data.append('bio[general_information]', generalInfoBio);
      data.append('bio[club_memberships]', affiliationBio);
      data.append('bio[coaching_interests]', coachingIntrestBio);
      if (selectedImage?.uri) {
        data.append('profile_picture', {
          uri: selectedImage?.uri || profileData?.profile_image,
          type:
            selectedImage?.type || 'image/jpeg' || 'image/png' || 'image/webp',
          name:
            selectedImage?.fileName || `${currentDate}-profile_picture.jpeg`,
        });
      }

      if (images.length > 0) {
        images.forEach((image, index) => {
          data.append(`images[${index}]`, {
            uri: image,
            type: 'image/jpeg',
            name: `${index}.jpeg`,
          });
        });
      }

      data.append('available', profileData?.available);
      data.append('coachFees[0][fee]', coach1Fee);
      data.append('coachFees[0][title]', coach1Name);
      data.append('coachFees[0][coaching_session_duration]', coach1Duration);
      data.append('coachFees[0][feedback_description]', coach1Feedback);
      data.append('coachFees[1][fee]', coach2Fee);
      data.append('coachFees[1][title]', coach2Name);
      data.append('coachFees[1][coaching_session_duration]', coach2Duration);
      data.append('coachFees[1][feedback_description]', coach2Feedback);
      // data.append(`coachFees[0][id]`, profileData?.coach_fees?.[0]?.fees_id);
      // data.append(`coachFees[1][id]`, profileData?.coach_fees?.[1]?.fees_id);

      const request = {
        data: data,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
          setModalVisible(true);
          // goBack();
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
          // setModalVisible(true);
        },
      };
      dispatch(userUpdate(request, id, userToken));
    }
  };

  const onPressBack = () => {
    setModalVisible(false);
    goBack();
  };

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Edit Profile'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />
      <Spinner
        visible={isInitialLoading}
        textContent="Please wait..."
        textStyle={{color: colors.white}}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={style.mainContainer}>
          <View style={style.profileDetailContainer}>
            {selectedImage ? (
              <TouchableOpacity onPress={() => handleCameraLaunch()}>
                <Image
                  source={{uri: selectedImage?.uri}}
                  style={style.uploadedPhotoView}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={style.outerPicContainer}
                onPress={handleCameraLaunch}>
                <ImageBackground
                  source={{uri: profileData?.profile_image || ''}}
                  imageStyle={{
                    height: wp(43),
                    width: '100%',
                    borderRadius: wp(5),
                    alignSelf: 'center',
                    borderWidth: 1,
                    borderColor: colors.lightGreen,
                  }}>
                  <Image
                    source={icons.profilePicShadow}
                    style={style.profilePic}
                    resizeMode="cover"
                  />
                  <View style={style.prilePicContainer}>
                    <Text style={style.changePhotoTxt}>
                      {'Change Profile Photo'}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
          <View style={style.midContainer}>
            <ProfileTextInput
              textInputStyle={style.textInputStyle}
              value={name}
              onChangeText={onChangeName}
            />
            <Dropdown
              style={style.dropdownSkill}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              iconStyle={style.iconStyle}
              data={categories.map(category => ({
                label: category.name,
                value: category.id,
              }))}
              labelField="label"
              valueField="value"
              placeholder={Object.values(profileData?.categories ?? '')}
              value={skills}
              itemTextStyle={{color: colors.black}}
              onChange={item => {
                setSkills(item.value);
              }}
            />
            <ProfileTextInput
              placeholder={'Email'}
              textInputStyle={style.textInputStyle}
              value={email}
            />
            <ProfileTextInput
              placeholder={'Phone Number'}
              textInputStyle={style.textInputStyle}
              keyboardType={'numeric'}
              value={phoneNumber}
              onChangeText={(text: any) => setPhoneNumber(text)}
            />
          </View>
          <View style={style.dobGenderContainer}>
            <TouchableOpacity
              style={style.dobTextInput}
              onPress={toggleDatePicker}>
              <Text style={style.dropDownTitltTxt}>
                {showDOB ? profileData?.dob : formatDate(selectedDate)}
              </Text>
            </TouchableOpacity>
            <DatePicker
              mode="date"
              modal
              open={open}
              date={selectedDate || new Date()}
              onConfirm={handleDateChange}
              onCancel={() => setOpen(false)}
              maximumDate={new Date()}
            />
            <Dropdown
              style={style.dropdown}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              iconStyle={style.iconStyle}
              data={dataGender}
              labelField="label"
              valueField="value"
              placeholder={profileData?.gender}
              itemTextStyle={{color: colors.black}}
              value={valueGender}
              onChange={item => {
                setValueGender(item.value);
              }}
            />
          </View>
          <Dropdown
            style={style.dropdownLaung}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            iconStyle={style.iconStyle}
            data={dataLanguages?.map(language => ({
              label: language,
              value: language,
            }))}
            labelField="label"
            valueField="value"
            itemTextStyle={{color: colors.black}}
            placeholder={profileData?.languages_spoken ?? 'Languages Spoken'}
            value={valueLanguage}
            onChange={item => {
              setValueLanguage(item.value);
            }}
          />

          <VideoModal
            isVisible={modalVisible}
            modalConetent={style.modalConetent}
            btnContainer={style.okBtnContainer}
            onButtonPress={() => onPressBack()}
          />

          <View style={style.meetCoachContainer}>
            <Text style={style.nameHeaderTxt}>{'Video Bio'}</Text>

            {selectedVideo ? (
              <TouchableOpacity onPress={() => handelChooseVideo()}>
                <Video
                  source={{
                    uri: selectedVideo?.uri,
                  }}
                  paused={isPaused}
                  onTouchStart={togglePause}
                  style={style.video}
                  resizeMode="cover"
                  posterResizeMode="cover"
                  poster={profileData?.bio_video_thumbnails ?? ''}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={style.btnControllerContainer}
                onPress={() => handelChooseVideo()}>
                {/* <Video
                  source={{
                    uri: profileData?.bio_video,
                  }}
                  paused={isPaused}
                  onTouchStart={togglePause}
                  style={style.video}
                  resizeMode="cover"
                  posterResizeMode="cover"
                  poster={profileData?.bio_video_thumbnails ?? ''}
                /> */}

                {profileData?.bio_video ? (
                  <Video
                    source={{
                      uri: profileData?.bio_video,
                    }}
                    paused={isPaused}
                    onTouchStart={togglePause}
                    style={style.video}
                    resizeMode="cover"
                    posterResizeMode="cover"
                    poster={profileData?.bio_video_thumbnails ?? ''}
                  />
                ) : (
                  <View style={style.noVideoContainer}>
                    <Text style={style.noVideoTxt}>No Video</Text>
                  </View>
                )}

                {isPaused && (
                  <TouchableOpacity
                    onPress={() => setIsPaused(!isPaused)}
                    style={style.btnController}>
                    {!profileData?.bio_video === null ? (
                      <Image source={icons.playBtn} style={style.playBtn} />
                    ) : null}
                  </TouchableOpacity>
                )}
                <View style={style.changeVideo}>
                  {isPaused ? (
                    <Text style={style.changePhotoTxt}>
                      {profileData?.bio_video ? 'Change Video' : 'Upload Video'}
                    </Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            )}

            <View style={style.bioContainer}>
              <Text style={style.nameHeaderTxt}>{'Edit Your Bio'}</Text>

              <View
                style={{
                  backgroundColor: colors.inputGrey,
                  borderRadius: wp(4),
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    color: colors.darkBlue,
                    fontFamily: fontFamily.bold,
                    marginBottom: 0,
                  }}>
                  {'General Information & Achievements'}
                </Text>
                <TextInput
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  style={style.customEditBio}
                  placeholderTextColor={colors.darkBlue}
                  multiline={true}
                  value={generalInfoBio}
                  onChangeText={text => setGeneralInfoBio(text)}
                  numberOfLines={3}
                />
                <Text
                  style={{
                    color: colors.darkBlue,
                    fontFamily: fontFamily.bold,
                    marginBottom: 0,
                  }}>
                  {'Affiliation and Club Memberships'}
                </Text>
                <TextInput
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  style={style.customEditBio}
                  placeholderTextColor={colors.darkBlue}
                  multiline={true}
                  value={affiliationBio}
                  onChangeText={text => setAffilationBio(text)}
                  numberOfLines={2}
                />
                <Text
                  style={{
                    color: colors.darkBlue,
                    fontFamily: fontFamily.bold,
                    marginBottom: 0,
                  }}>
                  {'Special Coaching Interests'}
                </Text>
                <TextInput
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  style={style.customEditBio}
                  placeholderTextColor={colors.darkBlue}
                  multiline={true}
                  value={coachingIntrestBio}
                  onChangeText={text => setCoachingIntrestBio(text)}
                  numberOfLines={3}
                />
              </View>
            </View>
          </View>
          <View style={style.uploadPhotoContainer}>
            <ScrollView
              horizontal
              style={{marginHorizontal: 10}}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                data={images}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  borderRadius: wp(5),
                }}
                renderItem={({item, index}) => (
                  <>
                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: 5,
                        borderRadius: 10,
                        backgroundColor: colors.backgroundRed,
                      }}
                      onPress={() => handleDeletePhoto(index)}
                      hitSlop={20}>
                      <Image
                        source={icons.close}
                        style={{height: 10, width: 10}}
                      />
                    </TouchableOpacity>
                    <ImageBackground
                      source={{uri: item}}
                      style={{
                        borderRadius: wp(5),
                        overflow: 'hidden',
                        height: wp(28),
                        width: wp(40),
                        marginHorizontal: wp(5),
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={icons.profilePicShadow}
                        style={[style.uploadedImg]}
                        resizeMode="cover"
                      />
                    </ImageBackground>
                  </>
                )}
              />
              {/* {images.length > 0 && (
                <FlatList
                  data={images}
                  horizontal
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{
                    borderRadius: wp(5),
                  }}
                  renderItem={({item}) => (
                    <ImageBackground
                      source={{uri: item}}
                      style={{
                        borderRadius: wp(5),
                        overflow: 'hidden',
                        height: wp(28),
                        width: wp(40),
                        marginHorizontal: wp(5),
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={icons.profilePicShadow}
                        style={[style.uploadedImg]}
                        resizeMode="cover"
                      />
                    </ImageBackground>
                  )}
                />
              )} */}
              <TouchableOpacity
                style={style.addMoreBtn}
                onPress={handleUploadPhoto}>
                <Image source={icons.addIcon} style={style.addIconStyle} />
                <Text style={style.nextTxt}>Upload Photo</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={style.cardContainer}>
            <Text style={style.coachingFeesTxt}>{'Your Coaching Fees'}</Text>
            <View style={style.rowContainer}>
              <TextInput
                style={[style.input, {width: '45%'}]}
                placeholder="Name"
                placeholderTextColor={colors.darkBlue}
                value={coach1Name}
                onChangeText={text => setCoach1Name(text)}
              />
              <TextInput
                style={[style.ratesInput, {width: '45%'}]}
                placeholder="Fee"
                placeholderTextColor={colors.darkBlue}
                value={coach1Fee}
                onChangeText={text => setCoach1Fee(text)}
                maxLength={3}
                keyboardType="numeric"
              />
            </View>
            <TextInput
              style={style.input}
              placeholder="Coaching Feedback Duration"
              placeholderTextColor={colors.darkBlue}
              value={coach1Duration}
              onChangeText={text => setCoach1Duration(text)}
            />
            <TextInput
              style={style.feedBackInput}
              placeholder="Feedback Description"
              placeholderTextColor={colors.darkBlue}
              multiline={true}
              value={coach1Feedback}
              onChangeText={text => setCoach1Feedback(text)}
            />
            <View style={style.separator}>
              <View style={style.separatorLine} />
            </View>
            <View style={style.rowContainer}>
              <TextInput
                style={[style.input, {width: '45%'}]}
                placeholder="Name"
                placeholderTextColor={colors.darkBlue}
                value={coach2Name}
                onChangeText={text => setCoach2Name(text)}
              />
              <TextInput
                style={[style.ratesInput, {width: '45%'}]}
                placeholder="Fee"
                placeholderTextColor={colors.darkBlue}
                value={coach2Fee}
                onChangeText={text => setCoach2Fee(text)}
                inputMode="numeric"
                // maxLength={3}
              />
            </View>
            <TextInput
              style={style.input}
              placeholder="Coaching Feedback Duration"
              placeholderTextColor={colors.darkBlue}
              value={coach2Duration}
              onChangeText={text => setCoach2Duration(text)}
              inputMode="numeric"
            />
            <TextInput
              style={style.feedBackInput}
              placeholder="Feedback Description"
              placeholderTextColor={colors.darkBlue}
              multiline={true}
              value={coach2Feedback}
              onChangeText={text => setCoach2Feedback(text)}
            />
          </View>
          <NextButton
            title={'Save'}
            btnContainer={style.btnContainer}
            onPress={() => onPressSave()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
