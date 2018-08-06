import { connect } from 'react-redux';
import ChatLog from './chat_log';
import { withRouter } from 'react-router';
import { fetchChannel } from '../../actions/channel_actions';
import { fetchMessages } from '../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: (serverId, channelId) => dispatch(fetchChannel(serverId, channelId)),
    fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatLog));
