import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import CurrentServerInfo from './current_server_info';
import { fetchServer, fetchServers } from '../../util/server_api_util';


const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentServerId: ownProps.match.params.id,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: (id) => dispatch(fetchServer(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentServerInfo));
