import { connect } from 'react-redux';
import ChatInput from './chat_input';
import { createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    currentServerId: ownProps.match.params.server_id,
    currentChannelId: ownProps.match.params.channel_id,
    channels: state.entities.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (serverId, channelId, message) => dispatch(createMessage(serverId, channelId, message))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatInput));
