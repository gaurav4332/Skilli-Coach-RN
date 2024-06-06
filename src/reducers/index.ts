import {combineReducers} from 'redux';

import dataReducers, {AuthReducer, HomePageVideoReducer} from './dataReducers';

const appReducer = combineReducers({
  data: dataReducers,
  auth: AuthReducer,
  homePage: HomePageVideoReducer,
});

export default appReducer;
