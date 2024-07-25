import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEmpty} from 'lodash';
import {Alert} from 'react-native';

import {api, baseURL, GET, POST} from '../helper/apiConstants';
import {getAuthToken, makeAPIRequest} from '../helper/Global';
import {
  GET_COACH_BANK_DETAILS,
  GET_COACH_CREDIT_DETAILS,
  GET_CREDITS_POINTS,
  GET_FEEDBACK_COMPLETED,
  GET_FEEDBACK_PENDING_COMPLETION,
  GET_ID_AND_TOKEN,
  GET_RECENTLY_COACHED,
  IS_LOGIN,
  LOGOUT,
  USER_INFO,
} from './types';
import {useSelector} from 'react-redux';
import {navigationWithParam} from '../helper/utils';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const loginWithEmailPassword = request => async dispatch => {
  makeAPIRequest({
    method: POST,
    baseURL: api.login,
    data: request?.data,
  })
    .then(async response => {
      console.log('response:::---', response?.data?.data);
      dispatch({
        type: USER_INFO,
        payload: response?.data?.data || {},
      });
      dispatch({
        type: GET_ID_AND_TOKEN,
        payload: response?.data?.data?.coach?.id || {},
      });
      AsyncStorage.setItem('LOGIN_INFO', JSON.stringify(response?.data?.data));
      if (response?.data?.data) {
        AsyncStorage.setItem(
          'LOGIN_INFO',
          JSON.stringify(response?.data?.data),
        );
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const userLogout = request => async dispatch => {
  const headers = {
    Authorization: `Bearer ${request?.params?.userToken}`,
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.logout,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      console.log('response:::---userLogoutuserLogout', response);

      await AsyncStorage.removeItem('LOGIN_INFO');
      await AsyncStorage.removeItem('fcmToken');

      const fcmToken = await AsyncStorage.getItem('fcmToken');
      console.log('====================================');
      console.log(fcmToken, 'fcmToken from logout::::>>>>>>>>>');
      console.log('====================================');
      console.log('User data cleared. User logged out.');
      dispatch({
        type: IS_LOGIN,
        payload: false,
      });
      dispatch({
        type: IS_LOGIN,
        payload: false,
      });
      dispatch({
        type: USER_INFO,
        payload: {},
      });
      dispatch({
        type: GET_FEEDBACK_PENDING_COMPLETION,
        payload: {},
      });
      dispatch({
        type: GET_FEEDBACK_COMPLETED,
        payload: {},
      });
      dispatch({
        type: GET_RECENTLY_COACHED,
        payload: {},
      });

      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      if (error?.data?.message === 'Please login first to continue') {
        dispatch({
          type: IS_LOGIN,
          payload: false,
        });
      }
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const forgotPassword = request => async dispatch => {
  makeAPIRequest({
    method: POST,
    baseURL: api.forgotPassword,
    data: request?.data,
  })
    .then(async response => {
      if (response?.data?.data) {
        dispatch({
          type: USER_INFO,
          payload: response?.data?.data || {},
        });
        AsyncStorage.setItem(
          'LOGIN_INFO',
          JSON.stringify(response?.data?.data),
        );
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      if (error?.data?.data?.email?.[0]) {
        Alert.alert(error?.data?.data?.email?.[0]);
      }
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const signUpWithEmailPassword = request => async dispatch => {
  makeAPIRequest({
    method: POST,
    baseURL: api.register,
    data: request?.data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(async response => {
      dispatch({
        type: USER_INFO,
        payload: response?.data?.data || {},
      });
      dispatch({
        type: GET_ID_AND_TOKEN,
        payload: response?.data?.data?.user?.id || {},
      });
      AsyncStorage.setItem('LOGIN_INFO', JSON.stringify(response?.data?.data));
      if (response?.data?.message) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      } else if (!isEmpty(response?.data?.data)) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(error?.data?.message?.message || 'Something went to wrong!');

      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const userUpdate = (request, id, userToken) => async dispatch => {
  console.log('====================================');
  console.log(request, 'request:::::>>>>>>>>');
  console.log('====================================');
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: `${api.editProfile}${id}`,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      console.log('====================================');
      console.log(response, 'userUpdate Response ::::------');
      console.log('====================================');
      dispatch({type: USER_INFO, payload: response?.data?.data});
      if (request.onSuccess) request.onSuccess(response);
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message?.message ||
          'Something went to wrong, Please try again !!',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const coachActiveStatus = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: baseURL + `coach/${request?.params?.user_id}/updateAvailability`,
    headers: headers,
  })
    .then(async response => {
      if (request.onSuccess) request.onSuccess(response?.data?.data);
      if (response?.data) {
        console.log('coachActiveStatusresponse:::---', response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message || 'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const uploadCertificate = (request, userId) => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: baseURL + `coach/${request?.params?.userId}/upload/certificate`,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onSuccess(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message || 'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const deleteCertificate = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.removeCertificates,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onSuccess) request.onSuccess(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message?.message ||
          'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const acceptRequest = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL:
      baseURL +
      `coach/${request?.params?.coach_id}/student/${request?.params?.student_id?.student_id}/accept-coaching-session`,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message?.message ||
          'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};
export const dennyRequest = request => async dispatch => {
  console.log(
    'deny-coaching-session/student/>>>>>>>>',
    request?.params?.student_id?.student_id,
  );

  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL:
      baseURL +
      `coach/${request?.params?.coach_id}/deny-coaching-session/student/${request?.params?.student_id?.student_id}`,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message?.message ||
          'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const coachSessionFeedback = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL:
      baseURL +
      `student/${request?.params?.student_id?.student_id}/coach/${request?.params?.coach_id}/session/feedback`,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      navigationWithParam('CoachFeedBack', {
        data: response?.data?.data?.coachingSessionData,
      });

      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(
        error?.data?.message?.message ||
          'Something went to wrong,Please try again',
      );
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const feedbackCompleted = (request: any) => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.coachSessionCompleted,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      Alert.alert(
        'Success',
        response?.data?.message,
        [
          {
            text: 'OK',
            onPress: () => navigationWithParam('Home'),
          },
        ],
        {cancelable: false},
      );

      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);

      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const sentContactus = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.contactUs,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      Alert.alert(response?.data?.message);
      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const deleteCoachAccount = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.deleteAccount,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      await AsyncStorage.removeItem('LOGIN_INFO');
      dispatch({
        type: IS_LOGIN,
        payload: false,
      });
      dispatch({
        type: IS_LOGIN,
        payload: false,
      });
      dispatch({
        type: USER_INFO,
        payload: {},
      });

      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })

    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const creditDetailsCoach = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    baseURL: api.coachCreditDetails,
    data: request?.data,
    headers: headers,
  })
    .then(async response => {
      dispatch({type: GET_COACH_CREDIT_DETAILS, payload: response?.data?.data});

      if (response?.data) {
        if (request.onSuccess) request.onSuccess(response);
      } else {
        if (request.onFail) request.onFail(response);
      }
    })

    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const yourSkilliCreditsPoint = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: baseURL + `coach/${request?.params?.user_id}/score`,
    params: request?.params,
    headers: headers,
  })
    .then(async response => {
      dispatch({
        type: GET_CREDITS_POINTS,
        payload: response?.data?.data,
      });

      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const storeCoachBankDetails = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    url: api.coachBankDetails,
    params: request?.params,
    headers: headers,
    data: request?.data,
  })
    .then(async response => {
      Alert.alert(response?.data?.message);
      dispatch({type: GET_COACH_BANK_DETAILS, payload: response?.data?.data});
      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const redeemCoachCreditPoints = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: POST,
    url: api.redeemPoints,
    params: request?.params,
    headers: headers,
    data: request?.data,
  })
    .then(async response => {
      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      Alert.alert(error?.data?.message?.message || 'Something went wrong');
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};
