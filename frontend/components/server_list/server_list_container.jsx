import { connect } from 'react-redux';
import ServerList from './server_list';
import { fetchServers } from '../../actions/server_actions';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    currentUserId: state.ui.currentUserId,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
