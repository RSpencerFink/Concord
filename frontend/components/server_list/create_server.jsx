import React from 'react'

export default class CreateServer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      server_name: "",
      server_info: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateServerName(e){
    this.setState({server_name: e.target.value});
  }

  updateServerInfo(e){
    this.setState({server_info: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(this.props.closeModal());
  }

  render() {
    return (
      <form className="create-server-options-container" onSubmit={this.handleSubmit}>
          <h2 className="create-join-heading">CREATE YOUR SERVER</h2>
          <h3 className="create-join-subheading">By creating a server you will have access to free text chat to use amongst your friends</h3>
          <div className="create-join-input-container">
            <h5>SERVER NAME</h5>
            <input type="text" value={this.state.server_name} placeholder="Enter a Server Name" onChange={this.updateServerName.bind(this)}></input>
            <h5>SERVER INFO</h5>
            <textarea value={this.state.server_info} placeholder="Enter a Brief Description. (Optional)" onChange={this.updateServerInfo.bind(this)}/>
          </div>
          <div className="create-join-buttons">
            <button className="create-server-button" onClick={this.handleSubmit}>Create</button>
            <button className="back-button" onClick={() => this.props.openModal('AddServer')}><img className="back-arrow" src={backArrow}/>BACK</button>
          </div>
      </form>
    )
  }
}
