import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels, createChannel, deleteChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    channels: Object.values(state.entities.channels),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: (server_id) => dispatch(fetchChannels(server_id)),
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    deleteChannel: (serverId, channelId) => dispatch(deleteChannel(serverId, channelId)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
