import { RECEIVE_CURRENT_SERVER } from '../../actions/server_actions';


const currentServerReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SERVER:
      return (action.serverId);
    default:
      return state;
  }
};

export default currentServerReducer;
