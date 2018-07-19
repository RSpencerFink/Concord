import { connect } from 'react-redux';
import CurrentChannelInfo from './current_channel_info';
import { fetchChannel, receiveCurrentChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentChannelId: state.ui.currentChannelId,
    channels: state.entities.channels,
    currentServerId: state.ui.currentServerId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: (serverId, id) => dispatch(fetchChannel(serverId, id)),
    receiveCurrentChannel: (serverId, channelId) => dispatch(receiveCurrentChannel(serverId, channelId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentChannelInfo));
