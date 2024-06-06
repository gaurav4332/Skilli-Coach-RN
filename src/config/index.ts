import {ENV} from 'react-native-dotenv';

const baseUrl = {
  dev: 'https://skillapp.demoproject.info/api/',
  uat: 'https://uat.skillapp.demoproject.info/api/',
  prod: 'https://prod.skillapp.demoproject.info/api/',
};

const endpoints = {
  login: 'login',
  signup: 'signup',
  forgotPassword: 'forgot-password',
};

let environment: string = ENV;

const selectedEnvironment = environment || 'dev';

const envConfig = {
  BASE_URL: baseUrl[selectedEnvironment],
  ...Object.keys(endpoints).reduce((acc, endpoint) => {
    acc[
      endpoint.toUpperCase()
    ] = `${baseUrl[selectedEnvironment]}${endpoints[endpoint]}`;
    return acc;
  }, {}),
};

export default envConfig;
