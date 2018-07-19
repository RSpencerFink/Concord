import { combineReducers } from 'redux';
import usersReducer from './entities_reducers/users_reducer';
import serversReducer from './entities_reducers/servers_reducer';
import channelsReducer from './entities_reducers/channels_reducer';
import messagesReducer from './entities_reducers/messages_reducer';

export default combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer
});
