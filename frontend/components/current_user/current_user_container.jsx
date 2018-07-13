import React from 'react';
import { connect } from 'react-redux';
import CurrentUser from './current_user';
import { logout } from '../../actions/session_actions'
import { fetchUser, fetchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {
    currentUserId: state.ui.currentUserId,
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
