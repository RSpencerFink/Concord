import * as SessionAPIUtil from '../util/session_api_util';
import * as UsersAPIUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

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

export const createUser = (user) => {
  debugger
  return (dispatch) => {
    return UsersAPIUtil.createUser(user).then((user) => {
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
    return SessionAPIUtil.logout().then((user) => {
      return dispatch(receiveCurrentUser(user));
    });
  };
};
