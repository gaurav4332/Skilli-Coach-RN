import {
  LOGOUT,
  USER_INFO,
  SIGNUP,
  GET_SHOW_PROFILE_DATA,
  GET_SHOW_SKILL_CATEGORY,
  IS_LOGIN,
  GET_FEEDBACK_PENDING_COMPLETION,
  GET_FEEDBACK_COMPLETED,
  GET_RECENTLY_COACHED,
  GET_STUDENT_DETAILS,
  SET_CERTIFICATES_DATA,
  GET_SHOW_COACH_FEEDBACK,
  GET_ID_AND_TOKEN,
  SET_EDIT_PROFILE_DATA,
  GET_COACH_CREDIT_DETAILS,
  GET_COACH_FEEDBACK_DATA,
  GET_CREDITS_POINTS,
  GET_SHOW_ALL_NOTIFICATIONS,
  GET_COACH_BANK_DETAILS,
  GET_ALL_SPOKEN_LANGUAGES,
} from '../action/types';

const INITIAL_STATE = {
  userData: {},
  LOGOUT: {},
  signUp: {},
  GET_SHOW_PROFILE_DATA: {},
  GET_SHOW_SKILL_CATEGORY: {},
  isLogin: false,
  // GET_FEEDBACK_PENDING_COMPLETION: [],
  videoPendingCompletion: [],
  videoCompleted: [],
  recenltyCoached: [],
  skillCategoriesData: [],
  studentDetails: {},
  certificatesData: {},
  showFeedbackSession: [],
  idAndToken: {},
  profileData: [],
  editProfileData: [],
  coachCreditsData: {},
  coachFeedbackData: [],
  creditPoints: [],
  coachBankDetails: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          ...action.payload,
        },
      };
    case GET_SHOW_PROFILE_DATA:
      return {...state, profileData: action.payload};
    case SET_EDIT_PROFILE_DATA:
      return {...state, editProfileData: action.payload};

    case SET_CERTIFICATES_DATA:
      return {...state, certificatesData: action.payload};
    case GET_SHOW_SKILL_CATEGORY:
      return {...state, skillCategoriesData: action.payload};
    case GET_SHOW_COACH_FEEDBACK:
      return {...state, showFeedbackSession: action.payload};
    case GET_COACH_CREDIT_DETAILS:
      return {...state, coachCreditsData: action.payload};
    case GET_COACH_FEEDBACK_DATA:
      return {...state, coachFeedbackData: action.payload};
    case GET_CREDITS_POINTS:
      return {...state, creditPoints: action.payload};
    case GET_SHOW_ALL_NOTIFICATIONS:
      return {...state, allNotifications: action.payload};
    case GET_COACH_BANK_DETAILS:
      return {...state, coachBankDetails: action.payload};
    case GET_ALL_SPOKEN_LANGUAGES:
      return {...state, spokenLanguages: action.payload};
    case LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOGIN: {
      return {...state, isLogin: action.payload};
    }
    case USER_INFO:
      return {...state, userData: action.payload};
    case GET_ID_AND_TOKEN:
      return {...state, idAndToken: action.payload};
    default:
      return state;
  }
};

export const HomePageVideoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FEEDBACK_PENDING_COMPLETION: {
      return {...state, videoPendingCompletion: action.payload};
    }
    case GET_FEEDBACK_COMPLETED: {
      return {...state, videoCompleted: action.payload};
    }
    case GET_RECENTLY_COACHED:
      return {...state, recenltyCoached: action.payload};
    case GET_STUDENT_DETAILS:
      return {...state, studentDetails: action.payload};
    default:
      return state;
  }
};
