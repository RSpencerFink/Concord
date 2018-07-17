import ServerShow from './server_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchServer, fetchServers } from '../../util/server_api_util'
import { receiveCurrentServer } from '../../actions/server_actions'

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
    receiveCurrentServer: (currentServerId) => dispatch(receiveCurrentServer(currentServerId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
