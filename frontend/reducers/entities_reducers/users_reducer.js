import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_SERVER:
      return merge({}, action.payload.users);
    case RECEIVE_USER:
      return merge(oldState, {[action.user.id]: action.user})
    default:
      return oldState;
  }
};

export default usersReducer;
