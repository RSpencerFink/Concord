import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    channels: Object.values(state.entities.channels),
    currentServerId: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
