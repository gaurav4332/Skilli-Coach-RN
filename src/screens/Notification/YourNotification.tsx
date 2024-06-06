import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/common/Header';
import style from './yourNotification.style';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {dataNotification} from '../../helper/dataConstants';
import {hp} from '../../helper/constants';
import {useDispatch, useSelector} from 'react-redux';
import {showAllNotifications} from '../../action/DataAction';
import {colors, fontFamily, fontSize} from '../../helper/utils';

export default function YourNotification({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const allNotificationsData = useSelector(
    state => state.data.allNotifications,
  );

  const idAndToken = useSelector(state => state.auth?.idAndToken);

  const [isInitialLoading, setIsInitialLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      showNotifications();
    }, []),
  );

  const showNotifications = async () => {
    setIsInitialLoading(true);
    const request = {
      params: {
        user_id: idAndToken || '',
      },
      onSuccess: (res: any) => {
        setIsInitialLoading(false);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(showAllNotifications(request));
    setIsInitialLoading(false);
  };

  const renderItem = ({item}) => {
    return (
      <View style={style.itemContainer}>
        <Text style={style.itemTxt} numberOfLines={3}>
          {item?.notification_title ?? ''}
        </Text>
      </View>
    );
  };
  const onPressBack = () => {
    goBack();
  };

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView style={style.container}>
      <Header
        title={'Your Notifications'}
        rightContainer={style.rightContainer}
        onPressBack={() => onPressBack()}
        onPressRightBtn={() => onPressRightBtn()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allNotificationsData?.notification}
        bounces={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={style.listContainer}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.lightBlue,
                fontSize: fontSize(20),
                fontFamily: fontFamily.openSansBold,
              }}>
              {'You not have any notifications yet !'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
