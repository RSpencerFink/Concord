import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash';

 const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, action.channels)
    case RECEIVE_SERVER:
      return merge({}, action.payload.channels);
    case RECEIVE_CHANNEL:
      return merge(oldState, action.payload.channels);
    case REMOVE_CHANNEL:
      delete oldState[action.channelId];
      return oldState;
    default:
      return oldState;
  }
};

export default channelsReducer;
