// reducers/index.jsx

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import HelperReducer from './HelperReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  Helper: HelperReducer,
  jobs: jobsReducer,

});

export { rootReducer };