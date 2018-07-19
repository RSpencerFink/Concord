import { connect } from 'react-redux';
import CreateChannel from './create_channel';
import { createChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentServerId: state.ui.currentServerId,
    currentUserId: state.ui.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);
