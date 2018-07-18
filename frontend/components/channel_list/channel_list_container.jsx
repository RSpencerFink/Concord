import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels, createChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    channels: Object.values(state.entities.channels),
    currentServerId: state.ui.currentServerId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
