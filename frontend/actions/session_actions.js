import * as SessionAPIUtil from '../util/session_api_util';
import * as UsersAPIUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
const RECEIVE_USER = "RECEIVE_USER";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    return UsersAPIUtil.createUser(user).then((user) => {
      dispatch(receiveUser(user));
      return dispatch(receiveCurrentUser(user)),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      };
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then((user) => {
      return dispatch(receiveCurrentUser(user)),
      (err) => {
        return dispatch(receiveErrors(err.responseJSON));
      };
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};
