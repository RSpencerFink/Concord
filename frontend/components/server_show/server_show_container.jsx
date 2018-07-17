import ServerShow from './server_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { fetchServer, fetchServers } from '../../util/server_api_util'
import { receiveCurrentServer, fetchServer, fetchServers } from '../../actions/server_actions'
import { fetchChannel, receiveCurrentChannel } from '../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    channels: state.entities.channels,
    currentServerId: state.ui.currentServerId,
    currentChanneId: state.ui.currentChannelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    receiveCurrentServer: (currentServerId) => dispatch(receiveCurrentServer(currentServerId)),
    receiveCurrentChannel: (currentChannelId) => dispatch(receiveCurrentChannel(currentChannelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
