import * as UsersAPIUtil from '../util/users_api_util'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return UsersAPIUtil.fetchUsers().then((users) => {
      return dispatch(receiveAllUsers(users));
    });
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return UsersAPIUtil.fetchUser(id).then((user) => {
      return dispatch(receiveAllUsers(user));
    });
  };
};
