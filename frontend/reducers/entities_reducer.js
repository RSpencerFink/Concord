import { combineReducers } from 'redux';
import usersReducer from './entities_reducers/users_reducer';
import serversReducer from './entities_reducers/servers_reducer';

export default combineReducers({
  users: usersReducer,
  servers: serversReducer
});
