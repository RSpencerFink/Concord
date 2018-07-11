import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  currentUserId: sessionReducer,
  errors: errorsReducer
});
