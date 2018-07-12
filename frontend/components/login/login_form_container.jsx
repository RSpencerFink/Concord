import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions'
import { fetchUsers } from '../../actions/user_actions'


// const mapStateToProps = (state) => {
//   return {
//
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
