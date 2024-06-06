import {useNavigation} from '@react-navigation/native';

const onBoardingController = () => {
  const navigation = useNavigation();

  /** Navigate to Login screen  */
  const isLoginButton = (): void => {
    navigation.navigate('login');
  };

  /** Navigate to Signup screen  */
  const isSignUpButton = (): void => {
    navigation.navigate('signup');
  };

  return {isLoginButton, isSignUpButton};
};
export default onBoardingController;
