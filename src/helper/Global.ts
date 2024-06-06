import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {Alert, Linking, PermissionsAndroid} from 'react-native';
import {colors} from './utils';
import {commonActions} from '../navigation/rootNavigation';
import {api} from './apiConstants';
import {useSelector} from 'react-redux';

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
  baseURL,
}: any) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL,
      url,
      data,
      headers,
      params,
    };

    console.log('options', options);

    options.validateStatus = () => {
      return true;
    };

    axios(options)
      .then(response => {
        console.log('response backend >>>>>>>>>', response);
        if (response.status === 200) {
          resolve(response);
        } else if (response.status === 403) {
          commonActions('Login');
          reject(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });

export const getAuthToken = async () => {
  // const userData = useSelector(state => state.auth.userData);

  const abcd = await AsyncStorage.getItem('LOGIN_INFO');

  let finalToken = JSON.parse(abcd);

  if (abcd && abcd !== null) {
    console.log('userInfo', abcd);
    let token = null;
    if (abcd && finalToken?.token) {
      token = finalToken?.token;
    }
    return `Bearer ${token}`;
  } else {
    console.log('token>>>>>', token);
  }
  return token;
};

export const verifyEmail = (email: any) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const verifyPassword = password => {
  const reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return reg.test(password);
};
export const verifyMobileNumber = phoneNumber => {
  const reg = /^[0-9]{10}$/;
  return reg.test(phoneNumber);
};

export const verifyZipCode = zipcode => {
  const reg = /^[0-9]{6}$/;
  return reg.test(zipcode);
};

export const flashMsg = (title, desc) => {
  showMessage({
    message: title || '',
    description: desc,
    textStyle: colors.white,
    backgroundColor: colors.primary1,
  });
};

export const timeStampToDate = seconds => {
  var timestamp = seconds;
  var myDate = new Date(timestamp * 1000);
  return myDate.toJSON();
};

export async function locationPermission(onSuccess) {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    onSuccess(true);
  } else {
    Alert.alert(
      'Enable permission!',
      'Turn on your location service to find your current location.',
      [
        {
          text: 'Go to Settings',
          onPress: () => Linking.openSettings(),
        },
      ],
    );
  }
}
