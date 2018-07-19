import { RECEIVE_CURRENT_SERVER } from '../../actions/server_actions';
import { RECEIVE_CURRENT_CHANNEL } from '../../actions/channel_actions';



const currentServerReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SERVER:
    case RECEIVE_CURRENT_CHANNEL:
      return (action.serverId);
    default:
      return state;
  }
};

export default currentServerReducer;
