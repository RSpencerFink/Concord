import { connect } from 'react-redux';
import ServerUserShow from './server_users_show';
import { fetchUsers } from '../../actions/user_actions';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    currentServerId: state.ui.currentServerId,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerUserShow);
