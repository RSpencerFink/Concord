import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import AddServer from './server_list/add_server';
import CreateServer from './server_list/create_server_container';
import JoinServer from './server_list/join_server_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'AddServer':
      component = <AddServer />;
      break;
    case 'JoinServer':
      component = <JoinServer />;
      break;
    case 'CreateServer':
      component = <CreateServer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
