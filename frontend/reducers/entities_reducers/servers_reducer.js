import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../../actions/server_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions'
import { merge } from 'lodash';

 const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
    case RECEIVE_CHANNEL:
      return merge(oldState, action.payload.servers);
    case REMOVE_SERVER:
      delete oldState[action.serverId];
      return oldState;
    default:
      return oldState;
  }
};

export default serversReducer;
