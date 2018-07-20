import { connect } from 'react-redux';
import ChatInput from './chat_input';
import { createMessage } from '../../actions/message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentServerId: Number(ownProps.match.params.server_id),
    currentChannelId: Number(ownProps.match.params.id),
    channels: state.entities.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (serverId, channelId, message) => dispatch(createMessage(serverId, channelId, message)),
    fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatInput));
