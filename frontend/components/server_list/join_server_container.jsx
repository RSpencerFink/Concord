import { connect } from 'react-redux';
import JoinServer from './join_server';
import { joinServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    joinServer: (serverName) => dispatch(joinServer(serverName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinServer);
