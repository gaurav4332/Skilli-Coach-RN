import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './topUpCredits.style';
import Header from '../../../components/common/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {icons} from '../../../helper/iconConstants';

import TitleHeader from '../../../components/common/TitleHeader';
import {dataDuretion} from '../../../helper/dataConstants';
import Video from 'react-native-video';
import InputModal from '../../../components/common/InputModal';
import {colors} from '../../../helper/utils';
import {Dropdown} from 'react-native-element-dropdown';
import RoundProgressBar from '../../../components/common/RoundProgressBar';

import CustomLoader from '../../../components/common/CustomLoader';

import {useDispatch, useSelector} from 'react-redux';
import {getVideoPendingFeedback} from '../../../action/DataAction';
import {
  creditDetailsCoach,
  redeemCoachCreditPoints,
  storeCoachBankDetails,
  yourSkilliCreditsPoint,
} from '../../../action/AuthAction';
import {hp, wp} from '../../../helper/constants';
import Spinner from 'react-native-loading-spinner-overlay';

export default function TopUpCredits({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const coachData = useSelector(state => state.auth.userData);

  const idAndToken = useSelector(state => state.auth?.idAndToken);
  const creditsData = useSelector(state => state.data?.coachCreditsData);
  const creditsPoints = useSelector(state => state.data.creditPoints);

  let pointsValue = creditsData?.coachCreditScore;

  const pendingVideo = useSelector(
    state => state.homePage.videoPendingCompletion,
  );

  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [valueGender, setValueGender] = useState('year');
  const [dollarValue, setDollarValue] = useState('');
  const [skilliCredits, setSkilliCredits] = useState('');
  const [name, setName] = useState('');
  const [bsb, setBsb] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      pendingFeedBackVideoList();
      creditDetails();
      showCreditsPoints();
    }, [valueGender]),
  );

  const pendingFeedBackVideoList = async () => {
    try {
      const request = {
        params: {
          user_id: idAndToken || '',
          userToken: coachData?.token,
        },
        onSuccess: (res: any) => {
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

  const creditDetails = async () => {
    try {
      let formData = new FormData();

      formData.append('selectedDuration', valueGender);
      formData.append('coachId', idAndToken);
      const request = {
        data: formData,
        params: {
          user_id: idAndToken || '',
          userToken: coachData?.token,
        },
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
        },
        onFail: () => {
          console.log('Fail');
          setIsInitialLoading(false);
        },
      };
      dispatch(creditDetailsCoach(request));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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

  const reedemCreditPoint = async () => {
    if (name === '') {
      Alert.alert('Please enter your name');
    } else if (dollarValue > creditsPoints?.coach_score) {
      Alert.alert('You not have to enough points to redeem');
    } else if (accountNumber === '') {
      Alert.alert('Please enter account number');
    } else if (bsb === '') {
      Alert.alert('Please enter bsb number');
    } else if (bsb.length !== 6) {
      Alert.alert('Please enter valid bsb number');
    } else if (dollarValue === '') {
      Alert.alert('Please enter credits points');
    } else {
      setIsInitialLoading(true);
      let formData = new FormData();
      formData.append('price', dollarValue);
      formData.append('name', name);
      formData.append('bsb', bsb);
      formData.append('account_number', accountNumber);
      const request = {
        data: formData,
        params: {
          user_id: idAndToken || '',
          token: coachData?.token,
        },
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
          setModalVisible(false);
          setDollarValue('');
          setName('');
          setBsb('');
          setAccountNumber('');
        },
        onFail: () => {
          setIsInitialLoading(false);
          setModalVisible(false);
          setDollarValue('');
          setName('');
          setBsb('');
          setAccountNumber('');
        },
      };
      dispatch(redeemCoachCreditPoints(request));
      setIsInitialLoading(false);
    }
  };

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onPressTopUp = () => {
    if (name === '') {
      Alert.alert('Please enter credits points');
    } else if (accountNumber === '') {
      Alert.alert('Please enter account number');
    } else if (bsb === '') {
      Alert.alert('Please enter bsb number');
    } else if (creditsPoints === '') {
      Alert.alert('Please enter your name');
    } else {
      setIsInitialLoading(true);
      let requestData = new FormData();
      requestData.append('coachId', idAndToken);
      requestData.append('name', name);
      requestData.append('bsb', bsb);
      requestData.append('account_number', accountNumber);

      const request = {
        data: requestData,
        onSuccess: (res: any) => {
          setIsInitialLoading(false);
          setModalVisible(false);
        },
        onFail: (error: any) => {
          setIsInitialLoading(false);
          setModalVisible(false);
        },
      };
    }
  };

  const onPressCoachFeedBack = (item: any) => {
    navigation.navigate('TakeOffCoaching', {data: item});
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
            <Image source={{uri: item?.videos_thumbnail}} style={style.video} />
          ) : (
            <Video
              source={{
                uri: item?.videos ?? '',
              }}
              paused={!isPlaying}
              onTouchStart={() => togglePause(item.student_id)}
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
  const onPressAllVideo = () => {
    navigation.navigate('HistoryVideos');
  };

  const openTopUpModal = () => {
    setModalVisible(true);
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const onPressBack = () => {
    goBack();
  };
  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Skilli Credits'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />
      <Spinner visible={isInitialLoading} />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={style.feeContainer}>
          <Text style={style.feeTitleTxt}>{'Skilli Credits'}</Text>
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
        <View style={style.seamlessExpContainer}>
          <Text style={style.seamlessExpTxt}>
            {'Skilli retains 10% of earnings for seamless experience'}
          </Text>
        </View>
        <TouchableOpacity
          style={[style.topUpcontainer]}
          onPress={() => openTopUpModal()}>
          <Text style={style.nextTxt}>{`Redeem $${
            creditsPoints?.coach_score ?? ''
          }`}</Text>
        </TouchableOpacity>
        <InputModal
          isVisible={modalVisible}
          onClose={closeModal}
          titleText="Coaching Request"
          titleText2="Submitted"
          buttonText="Redeem"
          onButtonPress={reedemCreditPoint}
          modalConetent={style.modalConetent}
          subTitletext={
            'You will get a notification once the Coach accepts your request.'
          }
          // points={dollarValue}
          btnContainer={style.btnContainer}
          dollarValue={dollarValue}
          onDollarValueChange={text => setDollarValue(text)}
          skilliCredits={skilliCredits}
          onSkilliCreditsChange={text => setSkilliCredits(text)}
          name={name}
          onNameChange={text => setName(text)}
          bsb={bsb}
          onBsbChange={text => setBsb(text)}
          accountNumber={accountNumber}
          onAccountNumberChange={text => setAccountNumber(text)}
        />
        <View style={style.totalEarnContainer}>
          <View style={style.midEarnContainer}>
            <Text style={style.totalEarnTxt}>{'Total Earnings'}</Text>

            <Dropdown
              style={style.dropDownGender}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={dataDuretion}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={valueGender}
              value={valueGender}
              onChange={item => {
                setValueGender(item.value);
              }}
              renderRightIcon={() => (
                <Image
                  source={icons.downArrow}
                  style={style.downArrowImg}
                  resizeMode="contain"
                />
              )}
            />
          </View>
        </View>

        <RoundProgressBar points={pointsValue} />

        <View style={style.numberOfSessionView}>
          <View style={style.numOfCoachContainer}>
            <View style={style.txtAndNumberContainer}>
              <Text style={style.numOfSessionTxt}>
                {'Number of Coaching \nsessions'}
              </Text>
              <Text style={style.numberOfSessionTxt}>
                {creditsData?.numberOfCoachingSessions ?? ''}
              </Text>
            </View>
          </View>
          <View style={style.numOfCoachContainer}>
            <View style={style.txtAndNumberContainer}>
              <Text style={style.numOfSessionTxt}>
                {'Number of \nSkill Seekers Coached'}
              </Text>
              <Text style={style.numberOfSessionTxt}>
                {creditsData?.numberOfSkillSeekersCoached ?? ''}
              </Text>
            </View>
          </View>
        </View>
        <TitleHeader
          title={'Videos Pending Feedback'}
          titleHeaderContainer={style.titleHeaderContainer}
          titleRight={'View All'}
          onPressRightBtn={() => onPressAllVideo()}
        />
        <FlatList
          scrollEnabled={false}
          data={pendingVideo}
          renderItem={({item}) => <DataItem item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          style={style.interestFlatList}
          ListEmptyComponent={
            <View style={style.noDataContainer}>
              <Text style={style.noDataText}>
                {'No pending feedback video found'}
              </Text>
            </View>
          }
        />
      </ScrollView>
    </View>
  );
}
