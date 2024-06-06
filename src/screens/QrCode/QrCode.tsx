import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import QRCode from 'react-native-qrcode-svg';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {style} from './qrCode.style';
import {icons} from '../../helper/iconConstants';
import {colors} from '../../helper/utils';
import Spinner from 'react-native-loading-spinner-overlay';

export default function QrCode({navigation}: any) {
  const {goBack} = useNavigation();
  const [studentAppLink, setStudentAppLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const signUp = useSelector(state => state.auth?.userData);
  const abc = useSelector(state => state.data?.profileData);

  console.log('====================================');
  console.log(signUp, 'signnn');
  console.log('====================================');

  const data1 =
    Platform.OS === 'android'
      ? 'https://play.google.com/store/apps/details?id=com.globeconnex.pivitconnex&hl=en-IN'
      : 'https://apps.apple.com/in/app/doc-scanner-pdf-scan/id1528676206';

  const _generateDynamicLinkCoach = async () => {
    setIsLoading(true);
    const myObject = {
      name: signUp.coach?.name,
      email: signUp.coach?.email,
      coach_id: signUp.coach?.id,
    };

    const objectAsQueryParam = encodeURIComponent(JSON.stringify(myObject));

    try {
      const link = await dynamicLinks().buildShortLink(
        {
          link: `https://skillicoach.page.link/6RQi?coachDetails=${objectAsQueryParam}`,
          domainUriPrefix: 'https://skillicoach.page.link',
          android: {
            packageName: 'com.skilli.student',
          },
          ios: {
            bundleId: 'com.skilli.student',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );
      console.log('link Link:', link);
      setStudentAppLink(link);
      setIsLoading(false);
    } catch (error) {
      console.error('Error generating dynamic link:', error.message);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      _generateDynamicLinkCoach();
    }, []),
  );

  return (
    <View style={style.container}>
      <SafeAreaView />

      <Spinner visible={isLoading} />
      <TouchableOpacity style={style.backBtnContainer} onPress={() => goBack()}>
        <Image
          source={icons.backArrow}
          style={style.backBtn}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={style.logoContainer}>
        <Image
          source={icons.skilliLogo}
          style={style.skilliLogo}
          resizeMode="contain"
        />
      </View>
      <View style={style.qrCodeContainer}>
        {/* <Image source={icons.QrCode} style={style.qrCodeImg} /> */}
        {studentAppLink !== '' && (
          <QRCode
            value={studentAppLink}
            backgroundColor={colors.backgroundRed}
            color={colors.white}
            size={250}
          />
        )}

        <Text style={style.coachNameTxt}>{abc?.coachesData?.name ?? ''}</Text>
      </View>
    </View>
  );
}
