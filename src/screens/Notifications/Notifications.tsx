import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import style from './notifications.style';
import CustomSwitchTitle from '../../components/common/CustomSwitchTitle';
import Header from '../../components/common/Header';
import {useNavigation} from '@react-navigation/core';

export default function Notifications({navigation}: any) {
  const {goBack} = useNavigation();
  const [switchValue, setSwitchValue] = useState(false);

  const onPressRightBtn = () => {
    navigation.openDrawer();
  };

  const onPressBack = () => {
    goBack();
  };
  const handleSwitchChange = newValue => {
    setSwitchValue(newValue);
  };
  return (
    <View style={style.container}>
      <SafeAreaView />
      <Header
        title={'Notifications'}
        rightContainer={style.rightContainer}
        onPressRightBtn={() => onPressRightBtn()}
        onPressBack={() => onPressBack()}
      />

      <View style={style.notificationContainer}>
        <CustomSwitchTitle
          title="New Messages"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New feedback Request"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New Messages"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New feedback Request"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New Messages"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New feedback Request"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New Messages"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New feedback Request"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New Messages"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
        <CustomSwitchTitle
          title="New feedback Request"
          value={switchValue}
          onValueChange={handleSwitchChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
