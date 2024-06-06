import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './privacyPolicy.style';
import CollapsibleView from '../../components/common/CollapsibleView';
import {wp} from '../../helper/constants';
import Header from '../../components/common/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {faqData} from '../../helper/dataConstants';
import TitleNextButton from '../../components/common/TitleNextButton';
import SettingsTile from '../../components/common/SettingsTitle';
import {useDispatch} from 'react-redux';
import {getPrivacyPolicyData} from '../../action/DataAction';

export default function PrivacyPolicy({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [privacyPolicyData, setPrivacyPolicyData] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      termAndCondition();
    }, []),
  );

  const termAndCondition = async () => {
    setIsInitialLoading(true);
    const request = {
      onSuccess: (res: any) => {
        setPrivacyPolicyData(res);

        setIsInitialLoading(false);
      },
      onFail: () => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getPrivacyPolicyData(request));
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

      <SettingsTile
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={style.detailContainer}>
          <Text style={style.titleTxt}>{'Privacy Policy'}</Text>
          <Text style={style.detailTxt}>
            {privacyPolicyData?.TermsAndConditionsData?.[0]?.content}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
