import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import style from './coachBio.style';
import {icons} from '../../../helper/iconConstants';
import BioTextInput from '../../../components/auth/BioTextInput';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {SIGNUP} from '../../../action/types';
import Spinner from 'react-native-loading-spinner-overlay';

export default function CoachBio({navigation}: any) {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const signUp = useSelector((state: any) => state.data.signUp);

  const [selectedImage, setSelectedImage] = useState(null);
  const [generalInfo, setGeneralInfo] = useState('');
  const [clunMemberShip, setClubMemberShip] = useState('');
  const [coachingInterests, setCoachingInterests] = useState('');
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const [quote, setQuote] = useState('');

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
        if (response?.assets?.[0]?.fileSize > 52428800) {
          Alert.alert('Please choose video less than 200 MB');
        } else {
          let uri = response?.assets?.[0]?.uri;
          let type = response?.assets?.[0]?.type;
          let fileName = response?.assets?.[0]?.fileName;
          let fileSize = response?.assets?.[0]?.fileSize;
          setSelectedImage({uri, type, fileName, fileSize});
        }
      }
    });
  };

  const onChangeGeneralInfo = text => {
    setGeneralInfo(text);
  };

  const onChangeClubMember = text => {
    setClubMemberShip(text);
  };

  const onChangeCoachInterest = text => {
    setCoachingInterests(text);
  };
  const onChangeQuote = text => {
    setQuote(text);
  };

  const onPressNext = () => {
    console.log('====================================');
    console.log(selectedImage?.fileSize, 'selectedImage?.fileSize::::>>>>>>');
    console.log('====================================');
    if (
      generalInfo.trim() === '' ||
      clunMemberShip.trim() === '' ||
      coachingInterests.trim() === '' ||
      quote.trim() === ''
    ) {
      Alert.alert('Please fill all fields');
    } else if (selectedImage?.fileSize > 209715200) {
      Alert.alert('Please choose video less than 200 MB');
    } else {
      const coachBio = {
        general_information: generalInfo,
        club_memberships: clunMemberShip,
        coaching_interests: coachingInterests,
        quote: quote,
        bio_video: selectedImage,
      };
      dispatch({type: SIGNUP, payload: coachBio});

      navigation.navigate('CoachSkillRates');
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <Spinner visible={isInitialLoading} />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <TouchableOpacity
            style={style.backContainer}
            onPress={() => goBack()}>
            <Image
              source={icons.backArrow}
              style={style.backImg}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={style.logoContainer}>
            <Image
              source={icons.logo3x}
              style={style.logo}
              resizeMode="contain"
            />
          </View>
          <View style={style.staticBarContainer}>
            <Image
              source={icons.CreateYourBioBar}
              style={style.staticBar1}
              resizeMode="contain"
            />
          </View>
          <View style={style.titleContainer}>
            <Text style={style.titleTxt}>{'Create Your Bio'}</Text>
          </View>

          <View style={style.bioContainer}>
            <BioTextInput
              title={'General Information & Achievements'}
              onChangeText={onChangeGeneralInfo}
              value={generalInfo}
            />
            <BioTextInput
              title={'Affiliation and Club Memberships'}
              onChangeText={onChangeClubMember}
              value={clunMemberShip}
            />
            <BioTextInput
              title={'Special Coaching Interests'}
              onChangeText={onChangeCoachInterest}
              value={coachingInterests}
            />
          </View>

          <View style={style.quateContainer}>
            <Text style={style.titleTxt}>{'Quote'}</Text>
          </View>

          <View style={style.bioContainer}>
            <BioTextInput
              title={'Write a quote that identifies you..'}
              onChangeText={onChangeQuote}
              value={quote}
            />
          </View>

          <View style={style.videoContainer}>
            <View style={style.quateContainer}>
              <Text style={style.titleTxt}>{'Upload Video Bio'}</Text>
            </View>

            {selectedImage?.fileSize <= 209715200 ? (
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
                    resizeMode="cover"
                  />
                </View>
                <Text style={style.uploadPhotoTxt}>{'Upload Video'}</Text>
              </TouchableOpacity>
            )}
          </View>
          <NextButton
            title={'Next'}
            btnContainer={style.btnContainer}
            onPress={() => onPressNext()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
