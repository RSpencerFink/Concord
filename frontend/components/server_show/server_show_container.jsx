import ServerShow from './server_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveCurrentServer, fetchServer, fetchServers } from '../../actions/server_actions'
import { fetchChannels, fetchChannel, receiveCurrentChannel } from '../../actions/channel_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers,
    channels: state.entities.channels,
    currentServerId: state.ui.currentServerId,
    currentChannelId: state.ui.currentChannelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
    fetchChannels: (currentServerId) => dispatch(fetchChannels(currentServerId)),
    fetchChannel: (serverId, id) => dispatch(fetchChannel(serverId, id)),
    receiveCurrentServer: (currentServerId) => dispatch(receiveCurrentServer(currentServerId)),
    receiveCurrentChannel: (serverId, channelId) => dispatch(receiveCurrentChannel(serverId, channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
