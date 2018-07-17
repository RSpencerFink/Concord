import { RECEIVE_CURRENT_CHANNEL } from '../../actions/channel_actions';


const currentChannelReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return (action.channelId);
    default:
      return state;
  }
};

export default currentChannelReducer;
