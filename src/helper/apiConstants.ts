// /* API Methods */
export const GET = 'get';
export const POST = 'post';
export const PUT = 'put';
export const DELETE = 'delete';

import {REACT_APP_PROD_MODE} from '@env';

// console.log(REACT_APP_PROD_MODE, '>>>>>>>>');

export const baseURL = 'https://skillapp.demoproject.info/api/';

// export const baseURL = 'https://da65-122-169-118-120.ngrok-free.app/api/';

export const api = {
  login: baseURL + 'coach/login',
  logout: baseURL + 'coach/logout',
  register: baseURL + 'coach/register',
  forgotPassword: baseURL + 'coach/forget/password',
  skillCategory: baseURL + 'student/get/category',
  showProfile: baseURL + 'coach/show/Profile/',
  editProfile: baseURL + 'coach/edit/Profile/',
  showFaq: baseURL + 'faqs/show/User',
  contactUs: baseURL + 'contact/us/store',
  termAndCondition: baseURL + 'term/and/condition/show/User',
  privacyPolicy: baseURL + 'privacy/show/User',
  removeCertificates: baseURL + 'coach/remove/certificate',
  deleteAccount: baseURL + 'coach/account/delete',
  coachCreditDetails: baseURL + 'coach/credit/details',
  coachSessionCompleted: baseURL + 'student/session/completed',
  coachBankDetails: baseURL + 'coach/store/back/details',
  spokenLanguages: baseURL + 'student/coach/get/spoken/languages',
  redeemPoints: baseURL + 'coach/redeem/credit',
};
