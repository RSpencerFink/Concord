import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import CurrentServerInfo from './current_server_info';
import { fetchServer, fetchServers, leaveServer, deleteServer } from '../../actions/server_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers,
    currentUserId: state.ui.currentUserId,
    currentServerId: state.ui.currentServerId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id)),
    leaveServer: (serverId) => dispatch(leaveServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentServerInfo));
