import { RECEIVE_MESSAGE, RECEIVE_ALL_MESSAGES } from '../../actions/message_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';
import {merge} from 'lodash';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_CHANNEL:
    if (action.payload.messages) {
      return action.payload.messages;
    }
      return {};
    case RECEIVE_MESSAGE:
      return merge(oldState, {[action.message.id]: action.message});
    case RECEIVE_SERVER:
      return {};
    default:
      return state;
  }
};

export default messagesReducer;
