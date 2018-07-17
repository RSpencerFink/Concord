import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers } from '../../actions/user_actions';
import { fetchServers } from '../../actions/server_actions';
import { withRouter } from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchServers: () => dispatch(fetchServers())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Home));
