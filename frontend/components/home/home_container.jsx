import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers } from '../../actions/user_actions';
import { fetchServers } from '../../actions/server_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchServers: () => dispatch(fetchServers())
  };
};

export default connect(null, mapDispatchToProps)(Home);
