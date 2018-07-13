import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash';

 const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return merge(oldState, action.server);
    default:
      return oldState;
  }
};

export default serversReducer;
