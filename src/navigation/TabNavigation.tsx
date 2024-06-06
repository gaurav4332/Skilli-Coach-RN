import React from 'react';

import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../helper/utils';

import BottomTabBar from '../components/common/BottomTabBar';
import Credits from '../screens/Credits/Credits';

import {
  CreditsStack,
  HistoryStack,
  HomeStackNavigation,
  ProfileStackNavigation,
  SettingsStackNavigation,
  TestStack,
} from './MainStackNavigation';
import HistoryVideos from '../screens/Profile/historyVideo/HistoryVideos';
import Faq from "../screens/FA'Q/Faq";
import Notifications from '../screens/Notifications/Notifications';
import YourNotification from '../screens/Notification/YourNotification';

import Help from '../screens/Help/Help';

import Payment from '../screens/Payment/Payment';
import EditProfile from '../screens/Profile/editProfile/EditProfile';
import TermAndCondition from '../screens/TermAndCondition/TermAndCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';

const TabStack = createBottomTabNavigator();

function TabBar(props) {
  const {navigation, state} = props;
  return <BottomTabBar navigation={navigation} state={state} />;
}

const TabNavigation = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <TabStack.Navigator
        tabBar={TabBar}
        screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
        <TabStack.Screen
          name={'HomeStackNavigation'}
          component={HomeStackNavigation}
        />
        <TabStack.Screen name={'History'} component={HistoryStack} />
        <TabStack.Screen name={'HistoryVideos'} component={HistoryVideos} />
        <TabStack.Screen name={'Credits'} component={Credits} />
        <TabStack.Screen name={'Notifications'} component={Notifications} />
        <TabStack.Screen name={'Settings'} component={TestStack} />
        <TabStack.Screen name={'Faq'} component={Faq} />
        <TabStack.Screen name={'Help'} component={Help} />
        <TabStack.Screen name={'TopUpCredits'} component={CreditsStack} />
        <TabStack.Screen name={'Payment'} component={Payment} />
        <TabStack.Screen name={'EditProfile'} component={EditProfile} />
        <TabStack.Screen
          name={'TermAndCondition'}
          component={TermAndCondition}
        />
        <TabStack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <TabStack.Screen
          name={'YourNotification'}
          component={YourNotification}
        />
        <TabStack.Screen
          name={'SettingsStackNavigation'}
          component={SettingsStackNavigation}
        />
        <TabStack.Screen
          name={'ProfileStackNavigation'}
          component={ProfileStackNavigation}
        />
      </TabStack.Navigator>
    </View>
  );
};

export default TabNavigation;
