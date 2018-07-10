import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { signup } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
