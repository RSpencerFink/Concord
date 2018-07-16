import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions'

class AddServer extends React.Component {
  render () {
    return (
      <div className="create-server-options-container">
        <h2 className="add-server-title">OH, ANOTHER SERVER HUH?</h2>
        <div className="create-server-options">
          <div className="create-server">
            <h2>CREATE</h2>
            <span>Create a new server and invite your friends. Its free</span>
            <img src={createServerIcon} className="create-server-image"/>
            <button onClick={() => this.props.openModal('CreateServer')}>Create a Server</button>
          </div>
          <div className="join-server">
            <h2>JOIN</h2>
            <span>Enter a server name and join your friends server</span>
            <img src={joinServerIcon} className="create-server-image"/>
            <button onClick={() => this.props.openModal('JoinServer')}>Join a Server</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddServer);
