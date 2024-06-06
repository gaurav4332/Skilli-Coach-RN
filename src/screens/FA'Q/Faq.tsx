import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './faq.style';
import CollapsibleView from '../../components/common/CollapsibleView';
import {wp} from '../../helper/constants';
import Header from '../../components/common/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {faqData} from '../../helper/dataConstants';
import {useDispatch} from 'react-redux';
import {getShowFaq} from '../../action/DataAction';

export default function Faq({navigation}: any) {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [faqData, setFaqData] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      showFaq();
    }, []),
  );

  const showFaq = async () => {
    setIsInitialLoading(true);
    const request = {
      onSuccess: (res: any) => {
        setFaqData(res?.faqsData);
        setIsInitialLoading(false);
      },
      onFail: (error: any) => {
        console.log('Fail');
        setIsInitialLoading(false);
      },
    };
    dispatch(getShowFaq(request));
  };

  const renderFaqItem = ({item}: {item: any}) => (
    <CollapsibleView title={item.question} content={item.answer} />
  );

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
        title={'FAQ’s'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />
      <FlatList
        data={faqData}
        renderItem={renderFaqItem}
        keyExtractor={(item, index) => index.toString()}
        style={style.contentContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
