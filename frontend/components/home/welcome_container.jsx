import Welcome from './welcome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveCurrentServer } from '../../actions/server_actions'
import { receiveCurrentChannel } from '../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentServer: (serverId) => dispatch(receiveCurrentServer(serverId)),
    receiveCurrentChannel: (channelId) => dispatch(receiveCurrentChannel(channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));
