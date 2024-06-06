import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import style from './UploadPhoto.style';
import {icons} from '../../../helper/iconConstants';
import FloatingNextButton from '../../../components/auth/FloatingNextButton';
import AuthInputText from '../../../components/auth/AuthTextInput';
import NextButton from '../../../components/auth/NextButton';
import {useDispatch, useSelector} from 'react-redux';
import {SIGNUP} from '../../../action/types';
import {isEmpty} from 'lodash';
import moment from 'moment';
import {colors} from '../../../helper/utils';
import {hp, wp} from '../../../helper/constants';
import Spinner from 'react-native-loading-spinner-overlay';

const UploadPhoto = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [socialFacebook, setSocialFaceBook] = useState('');
  const [socialInstagram, setSocialInstagram] = useState('');
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const signUp = useSelector(state => state.data.signUp);

  const handleCameraLaunch = () => {
    // setIsInitialLoading(true);
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
        let uri = response.uri || response.assets?.[0]?.uri;
        let type = response?.assets?.[0]?.type;
        let fileName = response?.assets?.[0]?.fileName;
        setSelectedImage({uri, type, fileName});
        setIsInitialLoading(false);
        console.log(response?.assets, 'photo reponse::::::::>>>>>>');
      }
    });
  };

  const onChangeFacebook = (text: any) => {
    setSocialFaceBook(text);
  };
  const onChangeInstagram = (text: any) => {
    setSocialInstagram(text);
  };

  const onPressNext = () => {
    if (!selectedImage) {
      Alert.alert('Alert!', 'Please select photo');
    } else {
      const profileImage = {
        selectedImage,
        social_facebook: socialFacebook,
        social_instagram: socialInstagram,
      };
      dispatch({type: SIGNUP, payload: profileImage});
      navigation.navigate('CoachBio');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
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
              source={icons.ProfilePicBar}
              style={style.staticBar1}
              resizeMode="contain"
            />
          </View>
          <View style={style.titleContainer}>
            <Text style={style.titleTxt}>{'Profile Picture'}</Text>
          </View>

          {selectedImage ? (
            <TouchableOpacity
              onPress={() => handleCameraLaunch()}
              style={{
                width: '85%',
                // alignItems: 'center',
                backgroundColor: colors.inputBackground,
                // marginHorizontal: wp(5),
                alignSelf: 'center',
                borderRadius: wp(5),
                marginTop: hp(4),
                height: 200,
              }}>
              <Image
                source={{uri: selectedImage?.uri}}
                style={style.uploadedPhotoView}
                resizeMode="contain"
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
              <Text style={style.uploadPhotoTxt}>{'Upload Photo'}</Text>
            </TouchableOpacity>
          )}
          <View style={style.downContainer}>
            <View style={style.socialContainer}>
              <Text style={style.socialMediaTitleTxt}>
                {'Connect your Socials'}
              </Text>
              <View style={style.socialMidContainer}>
                <View style={style.socialInnerContainer}>
                  <Image source={icons.facebook} style={style.socialIcons} />
                  <TextInput
                    style={style.textInputStyle}
                    onChangeText={onChangeFacebook}
                  />
                </View>
                <View style={style.socialInnerContainer}>
                  <Image source={icons.instagram} style={style.socialIcons} />
                  <TextInput
                    style={style.textInputStyle}
                    onChangeText={onChangeInstagram}
                  />
                </View>
              </View>
            </View>
            <NextButton
              title={'Next'}
              onPress={() => onPressNext()}
              btnContainer={style.nextBtn}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UploadPhoto;
