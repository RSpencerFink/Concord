import Welcome from './welcome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveCurrentServer } from '../../actions/server_actions'

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentServer: (serverId) => dispatch(receiveCurrentServer(serverId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));
