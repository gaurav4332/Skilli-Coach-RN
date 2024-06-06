import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SelectFlow from '../screens/Auth/selectOptionScreen/SelectFlow';
import OnBoarding from '../screens/Auth/onBoardingScreen/OnBoarding';
import Login from '../screens/Auth/loginScreen/Login';
import ForgotPassword from '../screens/Auth/forgotPasswordScreen/ForgotPassword';
import CreateAccount from '../screens/Auth/skillSeekerAccount/CreateAccount';
import UploadPhoto from '../screens/Auth/uploadPhotoScreen/UploadPhoto';
import SkillImprove from '../screens/Auth/skillImproveScreen/SkillImprove';
import FindYourCoach from '../screens/Auth/findYourCoach/FindYourCoach';
import BuySkilliCredits from '../screens/Auth/buySkilliCredits/BuySkilliCredits';
import PaymentMethod from '../screens/Auth/paymentMethod/PaymentMethod';
import Home from '../screens/Home/homeScreen/Home';

import Coaches from '../screens/Home/homeScreen/Coaches';

import CoachingSession from '../screens/Home/homeScreen/CoachingSession';
import CoachingFees from '../screens/Home/homeScreen/coachingFees/CoachingFees';
import CoachFeedBack from '../screens/Home/homeScreen/feedBackFromCoachScreen/CoachFeedBack';
import DrawerNavigation from './DrawerNavigation';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/editProfile/EditProfile';
import HistoryVideos from '../screens/Profile/historyVideo/HistoryVideos';
import TopUpCredits from '../screens/Profile/topUpCredits/TopUpCredits';

import Faq from "../screens/FA'Q/Faq";
import TermAndCondition from '../screens/TermAndCondition/TermAndCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import Notifications from '../screens/Notifications/Notifications';
import Payment from '../screens/Payment/Payment';
import ExplainerVideo from '../screens/Auth/explainerVideo/ExplainerVideo';
import CoachBio from '../screens/Auth/coachBio/CoachBio';
import CoachSkillRates from '../screens/Auth/coachSkillRates/CoachSkillRates';
import CoachGuidelines from '../screens/Auth/coachGuidelines/CoachGuidelines';
import UploadFiles from '../screens/Auth/uploadFiles/UploadFiles';
import TakeOffCoaching from '../screens/Home/homeScreen/TakeOffCoachingScreen/TakeOffCoaching';
import QrCode from '../screens/QrCode/QrCode';
import Settings from '../screens/Setting/Settings';
import {useSelector} from 'react-redux';
import ChildrenCheck from '../screens/Auth/childrenCheck/ChildrenCheck';
import YourCertificates from '../screens/Profile/yourCertificates/YourCertificates';
import CompletedCoachFeedback from '../screens/Home/homeScreen/feedBackFromCoachScreen/CompletedCoachFeedback';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  const login = useSelector(state => state.auth.isLogin);

  return <>{login ? <MainStack /> : <AuthStackNavigation />}</>;
};

export const AuthStackNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={'ChildrenCheck'} component={ChildrenCheck} /> */}
        {/* <Stack.Screen name={'CoachBio'} component={CoachBio} /> */}
        {/* <Stack.Screen name={'UploadFiles'} component={UploadFiles} /> */}
        <Stack.Screen name={'ExplainerVideo'} component={ExplainerVideo} />
        <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SelectFlow'} component={SelectFlow} />
        <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
        <Stack.Screen name={'CreateAccount'} component={CreateAccount} />
        <Stack.Screen name={'UploadPhoto'} component={UploadPhoto} />
        <Stack.Screen name={'CoachBio'} component={CoachBio} />
        <Stack.Screen name={'CoachSkillRates'} component={CoachSkillRates} />
        <Stack.Screen name={'ChildrenCheck'} component={ChildrenCheck} />
        <Stack.Screen name={'BuySkilliCredits'} component={BuySkilliCredits} />
        <Stack.Screen name={'SkillImprove'} component={SkillImprove} />
        <Stack.Screen name={'FindYourCoach'} component={FindYourCoach} />
        <Stack.Screen name={'CoachGuidelines'} component={CoachGuidelines} />
        <Stack.Screen name={'UploadFiles'} component={UploadFiles} />
        <Stack.Screen name={'PaymentMethod'} component={PaymentMethod} />
        <Stack.Screen name={'TermAndCondition'} component={TermAndCondition} />
        <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <Stack.Screen name={'EditProfile'} component={EditProfile} />
        <Stack.Screen name={'Payment'} component={Payment} />
      </Stack.Navigator>
    </>
  );
};

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'TakeOffCoaching'} component={TakeOffCoaching} />
      <Stack.Screen name={'Coaches'} component={Coaches} />
      <Stack.Screen name={'CoachingSession'} component={CoachingSession} />
      <Stack.Screen name={'CoachingFees'} component={CoachingFees} />
      <Stack.Screen name={'CoachFeedBack'} component={CoachFeedBack} />
      <Stack.Screen name={'HistoryVideos'} component={HistoryVideos} />
      <Stack.Screen
        name={'CompletedCoachFeedback'}
        component={CompletedCoachFeedback}
      />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'HistoryVideos'} component={HistoryVideos} />
      <Stack.Screen name={'TopUpCredits'} component={TopUpCredits} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'YourCertificates'} component={YourCertificates} />
    </Stack.Navigator>
  );
};

export const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Faq'} component={Faq} />
      <Stack.Screen name={'HistoryVideos'} component={HistoryVideos} />
      <Stack.Screen name={'TopUpCredits'} component={TopUpCredits} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'QrCode'} component={QrCode} />
    </Stack.Navigator>
  );
};
export const TestStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SettingsScreen'} component={Settings} />
      <Stack.Screen name={'Payment'} component={Payment} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'TermAndCondition'} component={TermAndCondition} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};
export const HistoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HistoryScreen'} component={HistoryVideos} />
      <Stack.Screen name={'CoachFeedBack'} component={CoachFeedBack} />
    </Stack.Navigator>
  );
};

export const CreditsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'TopUpCreditsScreen'} component={TopUpCredits} />
      <Stack.Screen name={'CoachFeedBack'} component={CoachFeedBack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainStackNavigation;
