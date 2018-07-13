import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from './register_form';
import { createUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(createUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
