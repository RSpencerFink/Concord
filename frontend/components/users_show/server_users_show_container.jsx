import { connect } from 'react-redux';
import UsersShow from './users_show';
import { fetchUsers } from '../../actions/user_actions';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);
