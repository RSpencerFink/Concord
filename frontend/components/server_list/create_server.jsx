import React from 'react'

export default class CreateServer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      server_name: "",
    }
  }

  updateServerName(e){
    this.setState({server_name: e.target.value});
  }

  render() {
    return (
      <div className="create-server-options-container">
        <h2 className="create-join-heading">CREATE YOUR SERVER</h2>
        <h3 className="create-join-subheading">By creating a server you will have access to free text chat to use amongst your friends</h3>
        <div className="create-join-input-container">
          <h5>SERVER NAME</h5>
          <input type="text" value={this.state.server_name} placeholder="Enter a Server Name" onChange={this.updateServerName.bind(this)}></input>
        </div>
        <div className="create-join-buttons">
          <button className="back-button" onClick={() => this.props.openModal('AddServer')}><img className="back-arrow" src={backArrow}/>BACK</button>
          <button className="create-server-button" onClick={() => this.props.createServer(this.state)}>Create</button>
        </div>
      </div>
    )
  }
}
