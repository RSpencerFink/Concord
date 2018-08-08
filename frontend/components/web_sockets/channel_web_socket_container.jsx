import { connect } from "react-redux";
import { withRouter } from "react-router";
import ChannelWebSocket from "./channel_web_socket";
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentChannelId: state.ui.currentChannelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: (message) => dispatch(receiveMessage(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelWebSocket)
);
