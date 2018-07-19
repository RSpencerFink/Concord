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
    receiveCurrentChannel: (serverId, channelId) => dispatch(receiveCurrentChannel(serverId, channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));
