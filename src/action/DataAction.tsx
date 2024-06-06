import {api, baseURL, GET} from '../helper/apiConstants';
import {getAuthToken, makeAPIRequest} from '../helper/Global';
import {
  GET_ALL_SPOKEN_LANGUAGES,
  GET_FEEDBACK_COMPLETED,
  GET_FEEDBACK_PENDING_COMPLETION,
  GET_RECENTLY_COACHED,
  GET_SHOW_ALL_NOTIFICATIONS,
  GET_SHOW_COACH_FEEDBACK,
  GET_SHOW_PROFILE_DATA,
  GET_SHOW_SKILL_CATEGORY,
  GET_STUDENT_DETAILS,
  IS_LOGIN,
  SET_EDIT_PROFILE_DATA,
} from './types';

export const getProfileData = (request, user_id) => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: `${api.showProfile}${request?.params?.user_id}`,
    params: request?.params,
    headers: headers,
  })
    .then(async response => {
      console.log(response, 'resss :::::>>>>');

      dispatch({
        type: GET_SHOW_PROFILE_DATA,
        payload: response?.data?.data,
      });
      dispatch({
        type: SET_EDIT_PROFILE_DATA,
        payload: response?.data?.data?.coachesData,
      });
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
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

export const getSpokenLanguages = request => async dispatch => {
  const headers = {
    // Accept: 'application/json',
    // Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: `${api.spokenLanguages}`,
    // params: request?.params,
    // headers: headers,
  })
    .then(async response => {
      dispatch({
        type: GET_ALL_SPOKEN_LANGUAGES,
        payload: response?.data?.data?.languages_spoken,
      });
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getSkillCategory = request => async dispatch => {
  const headers = {
    Accept: 'application/json',
  };

  makeAPIRequest({
    method: GET,
    url: `${api.skillCategory}`,
    // params: request?.params,
    // headers: headers,
  })
    .then(async response => {
      console.log('getSkillCategory:Response', response);
      if (response?.data?.data) {
        dispatch({
          type: GET_SHOW_SKILL_CATEGORY,
          payload: response?.data?.data?.list,
        });
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getVideoPendingFeedback = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };
  dispatch({
    type: GET_FEEDBACK_PENDING_COMPLETION,
    payload: [],
  });
  makeAPIRequest({
    method: GET,
    url: baseURL + `coach/${request?.params?.user_id}/video/feedback`,
    headers: headers,
  })
    .then(async response => {
      dispatch({
        type: GET_FEEDBACK_PENDING_COMPLETION,
        payload: response?.data?.data?.sessions ?? [],
      });
      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      if (error?.data?.message === 'Please login first to continue') {
        dispatch({
          type: IS_LOGIN,
          payload: false,
        });
      }
      console.log(
        '🚀 ~ file: authAction.js ~ line 69 ~  ~ errorrrrrrrrrrrrrr::::::::>>>>>>>>',
        error,
      );
    });
};

export const getFeedbackCompletedVideo = request => async dispatch => {
  const headers = {
    // Accept: 'application/json',
    Authorization: await getAuthToken(),
  };

  dispatch({
    type: GET_FEEDBACK_COMPLETED,
    payload: {},
  });

  makeAPIRequest({
    method: GET,
    url: baseURL + `coach/${request?.params?.user_id}/video/completed`,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data?.sessions) {
        dispatch({
          type: GET_FEEDBACK_COMPLETED,
          payload: response?.data?.data?.sessions,
        });
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getRecentlyCoached = request => async dispatch => {
  const headers = {
    Accept: 'application/json',
    Authorization: await getAuthToken(),
  };
  dispatch({
    type: GET_RECENTLY_COACHED,
    payload: {},
  });
  makeAPIRequest({
    method: GET,
    url: baseURL + `coach/${request?.params?.user_id}/recent-coached-students`,
    headers: headers,
  })
    .then(async response => {
      console.log('getRecentlyCoached:Response', response);
      dispatch({
        type: GET_RECENTLY_COACHED,
        payload: response?.data?.data?.recentlyCoached,
      });
      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getStudentDetails = (request, user_id) => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };

  let endPoint = `coach/${request?.params?.coach_id}/student/${request?.params?.student_id?.student_id}/coaching/session`;

  makeAPIRequest({
    method: GET,
    url: baseURL + endPoint,
    params: request?.params,
    headers: headers,
  })
    .then(async response => {
      console.log('getStudentDetails:Response', response);
      dispatch({
        type: GET_STUDENT_DETAILS,
        payload: response?.data?.data,
      });
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const sessionFeedBackDetails = (request: any) => async dispatch => {
  console.log('====================================');
  console.log(request, 'sessionFeedBackDetails::::>>>>>>');
  console.log('====================================');
  const headers = {
    Authorization: await getAuthToken(),
  };

  let endPoint = `student/${request?.params?.student_id}/coach/${request?.params?.coach_id}/session/feedback`;

  makeAPIRequest({
    method: GET,
    url: baseURL + endPoint,
    params: request?.params,
    headers: headers,
  })
    .then(async response => {
      console.log('====================================');
      console.log(response, 'sessionFeedBackDetailsRESSSS::::>>>>>>');
      console.log('====================================');
      dispatch({
        type: GET_SHOW_COACH_FEEDBACK,
        payload: response?.data?.data,
      });

      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getShowFaq = request => async dispatch => {
  const headers = {
    Accept: 'application/json',
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: `${api.showFaq}`,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getTermAndConditionData = request => async dispatch => {
  const headers = {
    Accept: 'application/json',
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: `${api.termAndCondition}`,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const getPrivacyPolicyData = request => async dispatch => {
  const headers = {
    Accept: 'application/json',
    Authorization: await getAuthToken(),
  };

  makeAPIRequest({
    method: GET,
    url: `${api.privacyPolicy}`,
    headers: headers,
  })
    .then(async response => {
      if (response?.data?.data) {
        if (request.onSuccess) request.onSuccess(response?.data?.data);
      }
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};

export const showAllNotifications = request => async dispatch => {
  const headers = {
    Authorization: await getAuthToken(),
  };
  makeAPIRequest({
    method: GET,
    url: baseURL + `coach/${request?.params?.user_id}/notification`,
    params: request?.params,
    headers: headers,
  })
    .then(async response => {
      dispatch({
        type: GET_SHOW_ALL_NOTIFICATIONS,
        payload: response?.data?.data,
      });

      if (request.onSuccess) request.onSuccess(response?.data?.data);
    })
    .catch(error => {
      if (request.onFail) request.onFail(error);
      console.log('🚀 ~ file: authAction.js ~ line 69 ~  ~ error', error);
    });
};
