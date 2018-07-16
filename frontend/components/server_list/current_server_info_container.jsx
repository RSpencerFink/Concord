import { connect } from 'react-redux';
import CurrentServerInfo from './current_server_info';

const mapStateToProps = (state, ownProps) => {
  return {
    // currentServerId: ownProps.match.params.serverId,
    servers: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentServerInfo);
