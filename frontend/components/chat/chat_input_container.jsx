import { connect } from 'react-redux';
import ChatInput from './chat_input';
import { createMessage } from '../../actions/message_actions';
import { fetchChannel, receiveCurrentChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentServerId: parseInt(ownProps.match.params.server_id),
    currentChannelId: parseInt(ownProps.match.params.id),
    channels: state.entities.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message)),
    receiveCurrentChannel: (serverId, channelId) => dispatch(receiveCurrentChannel(serverId, channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatInput));
