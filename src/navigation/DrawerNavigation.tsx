import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import CustomDrawerContent from '../components/common/CustomDrawerContent';
import {TestStack} from './MainStackNavigation';
import Credits from '../screens/Credits/Credits';
import TopUpCredits from '../screens/Profile/topUpCredits/TopUpCredits';
import Faq from "../screens/FA'Q/Faq";
import Help from '../screens/Help/Help';
import Notifications from '../screens/Notifications/Notifications';
import QrCode from '../screens/QrCode/QrCode';
import EditProfile from '../screens/Profile/editProfile/EditProfile';
import YourCertificates from '../screens/Profile/yourCertificates/YourCertificates';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {width: '100%'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Credits" component={Credits} />
      <Drawer.Screen name="TopUpCredits" component={TopUpCredits} />
      <Drawer.Screen name="QrCode" component={QrCode} />
      <Drawer.Screen name="Settings" component={TestStack} />
      <Drawer.Screen name="Faq" component={Faq} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name={'YourCertificates'} component={YourCertificates} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
