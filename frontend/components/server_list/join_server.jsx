import React from 'react'

export default class JoinServer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      server_name: "",
    }
  }

  updateServerName(e){
    this.setState({server_name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(this.props.closeModal);
  }

  render() {
    return (
      <form className="create-server-options-container" onSubmit={() => this.handleSubmit}>
        <h2 className="join-heading">JOIN A SERVER</h2>
        <h3 className="create-join-subheading">Enter a server name to join an existing server.</h3>
        <div className="create-join-input-container">
          <input type="text" value={this.state.server_name} placeholder="Enter a Server Name" onChange={this.updateServerName.bind(this)}></input>
          <p>Enter a Server Name</p>
        </div>
        <div className="create-join-buttons">
          <button className="back-button" onClick={() => this.props.openModal('AddServer')}><img className="back-arrow" src={backArrow}/>BACK</button>
          <button className="join-server-button">Join</button>
        </div>
      </form>
    )
  }
}
