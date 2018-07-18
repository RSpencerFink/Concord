import { connect } from 'react-redux';
import CurrentChannelInfo from './current_channel_info';
import { fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentChannelId: state.ui.currentChannelId,
    channels: state.entities.channels,
    currentServerId: state.ui.currentServerId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChannelInfo);
