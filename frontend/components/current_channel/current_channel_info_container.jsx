import { connect } from 'react-redux';
import CurrentChannelInfo from './current_channel_info';

const mapStateToProps = (state, ownProps) => {
  return {
    currentChannelId: state.ui.currentChannelId,
    channels: state.entities.channels 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChannelInfo);
