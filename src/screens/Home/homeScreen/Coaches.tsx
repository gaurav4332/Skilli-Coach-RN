import {
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
import React, {useState} from 'react';
import style from './coaches.style';

import Video from 'react-native-video';
import {useNavigation, useRoute} from '@react-navigation/native';

import Header from '../../../components/common/Header';
import {icons} from '../../../helper/iconConstants';
import NextButton from '../../../components/auth/NextButton';
import {dataVideo} from '../../../helper/dataConstants';

export default function Coaches({navigation}: any) {
  const route = useRoute();
  const {goBack} = useNavigation();

  const {selectedCoach} = route.params;

  const [liked, setLiked] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const [currentlyPlayingVideoId, setCurrentlyPlayingVideoId] = useState(null);

  const togglePause = videoId => {
    if (videoId === currentlyPlayingVideoId) {
      setCurrentlyPlayingVideoId(null);
    } else {
      setCurrentlyPlayingVideoId(videoId);
    }
  };

  // const togglePause = () => {
  //   setIsPaused(!isPaused);
  // };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const onPressBack = () => {
    goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const requestCoach = () => {
    navigation.navigate('CoachingSession');
  };

  const DataItem = ({item}) => {
    const isPlaying = item.id === currentlyPlayingVideoId;
    return (
      <Pressable style={style.btnControllerContainer}>
        <Video
          source={{uri: item.videoLink}}
          paused={!isPlaying}
          onTouchStart={() => togglePause(item.id)}
          style={style.videoListStyle}
          resizeMode="cover"
          poster={item.poster}
          posterResizeMode="cover"
        />
        {!isPlaying && (
          <TouchableOpacity
            onPress={() => togglePause(item.id)}
            style={style.btnController}>
            <Image source={icons.playBtn} style={style.playBtn} />
          </TouchableOpacity>
        )}
      </Pressable>
    );
  };

  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Coaches'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <ScrollView
        style={style.coachContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.hedaerDetailContainer}>
          <View style={style.profileImg}>
            <Image
              source={selectedCoach.img}
              style={style.spotCoachImg}
              resizeMode="stretch"
            />
          </View>
          <View style={style.coachNameTypeContainer}>
            <View style={style.nameAndStarContainer}>
              <Text style={style.coachNameTxt}>{selectedCoach.coachName}</Text>
              <TouchableOpacity>
                <Image source={icons.fillStar} style={style.starIcon} />
              </TouchableOpacity>
            </View>
            <Text style={style.coachTypeTxt}>{selectedCoach.coachType}</Text>
            <Text style={style.coachLabelTxt}>{selectedCoach.label}</Text>
            <NextButton
              title="Request Coaching Session"
              btnContainer={style.btnContainer}
              onPress={() => requestCoach()}
            />
          </View>
          <View style={style.meetCoachContainer}>
            <Text style={style.nameHeaderTxt}>{'Meet your Coach'}</Text>
            <Pressable
              style={style.btnControllerContainer}
              onPress={() => setIsPaused(!isPaused)}>
              <Video
                source={{
                  uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                }}
                paused={isPaused}
                onTouchStart={togglePause}
                style={style.video}
                resizeMode="cover"
                posterResizeMode="cover"
                poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe52adUP261OB4mA8mkRi49M5pzjRdlZHvxepyRFMQAbMdvYTwQNzOohA5emKAr-vEfMY&usqp=CAU"
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

          <View style={style.meetCoachContainer}>
            <Text style={style.nameHeaderTxt}>{'Coach Bio'}</Text>
            <Text style={style.coachBioTxt}>{selectedCoach.bio}</Text>
          </View>
          <View style={style.videoList}>
            <FlatList
              horizontal
              data={dataVideo}
              renderItem={({item}) => <DataItem item={item} />}
              keyExtractor={item => item.id}
              style={style.interestFlatList}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={style.meetCoachContainer}>
            <Text style={style.nameHeaderTxt}>{'Mick’s Fees'}</Text>
            <View style={style.outerFeeContainer}>
              <View style={style.feeContainer}>
                <Text style={style.feeTitleTxt}>{'Fee 1 (time)'}</Text>
                <View style={style.feeHomelogoContainer}>
                  <Image
                    source={icons.home}
                    style={style.feeHomelogoImg}
                    resizeMode="contain"
                  />
                  <Text style={style.feeTxt}>{'50'}</Text>
                </View>
              </View>
              <Text style={style.coachFeeDescriptionTxt}>
                {selectedCoach.bio}
              </Text>

              <View style={style.feeContainer}>
                <Text style={style.feeTitleTxt}>{'Fee 1'}</Text>
                <View style={style.feeHomelogoContainer}>
                  <Image
                    source={icons.home}
                    style={style.feeHomelogoImg}
                    resizeMode="contain"
                  />
                  <Text style={style.feeTxt}>{'50'}</Text>
                </View>
              </View>
              <Text style={style.coachFeeDescriptionTxt}>
                {selectedCoach.bio}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
