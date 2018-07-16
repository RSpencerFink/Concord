import { connect } from 'react-redux';
import CreateServer from './create_server';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createServer } from '../../actions/server_actions';

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    createServer: (server) => dispatch(createServer(server))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServer);
