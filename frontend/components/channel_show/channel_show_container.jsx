import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  return {
    currentChannelId: state.ui.currentChannelId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
