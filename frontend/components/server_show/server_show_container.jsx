import ServerShow from './server_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchServer, fetchServers } from '../../util/server_api_util'

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
