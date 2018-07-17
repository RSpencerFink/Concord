import { combineReducers } from 'redux';
import currentUserReducer from './ui_reducers/current_user_reducer';
import currentServerReducer from './ui_reducers/current_server_reducer';
import currentChannelReducer from './ui_reducers/current_channel_reducer';
import errorsReducer from './ui_reducers/errors_reducer';
import modalReducer from './ui_reducers/modal_reducer'

export default combineReducers({
  currentUserId: currentUserReducer,
  currentServerId: currentServerReducer,
  currentChannelId: currentChannelReducer,
  errors: errorsReducer,
  modal: modalReducer
});
