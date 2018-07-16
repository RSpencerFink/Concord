import { connect } from 'react-redux';
import JoinServer from './join_server';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinServer);
