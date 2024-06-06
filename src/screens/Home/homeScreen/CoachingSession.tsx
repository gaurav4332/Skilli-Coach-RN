import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import style from './coachingSession.style';
import {colors} from '../../../helper/utils';
import {icons} from '../../../helper/iconConstants';
import Header from '../../../components/common/Header';
import NextButton from '../../../components/auth/NextButton';

export default function CoachingSession({navigation}: any) {
  const {goBack} = useNavigation();

  const route = useRoute();

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };
  const onPressNext = () => {
    navigation.navigate('CoachingFees');
  };

  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Choaching Session'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' && 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Text style={style.yourCoachingSesTxt}>
            {'Your Choaching Session'}
          </Text>
          <View style={style.coachSelectedContainer}>
            <Text style={style.coachSelectedTxt}>{'Alex Smith'}</Text>
          </View>
          <View style={style.coachSelectedContainer}>
            <Text style={style.coachSelectedTxt}>{'Volleyball Coach'}</Text>
          </View>
          {selectedImage ? (
            <TouchableOpacity onPress={() => handleCameraLaunch()}>
              <Image
                source={{uri: selectedImage}}
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
                  resizeMode="stretch"
                />
              </View>
              <Text style={style.uploadPhotoTxt}>{'Upload Video'}</Text>
            </TouchableOpacity>
          )}
          <View>
            <TextInput
              placeholder={
                'What Skills do you want to improve in \nyour sport?'
              }
              style={style.textInputStyle}
              // numberOfLines={8}
              placeholderTextColor={colors.darkBlue}
            />
          </View>

          <NextButton
            title="Next"
            btnContainer={style.btnContainer}
            onPress={() => onPressNext()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
