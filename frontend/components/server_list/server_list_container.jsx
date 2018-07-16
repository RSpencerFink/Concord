import { connect } from 'react-redux';
import ServerList from './server_list';
import { fetchServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    currentUserId: state.ui.currentUserId,
    servers: Object.values(state.entities.servers)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
