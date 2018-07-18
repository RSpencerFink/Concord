import React from 'react';

export default class CreateChannel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channel_name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateChannelName(e){
    this.setState({server_name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(this.props.closeModal());
  }

  render(){
    return(
      <form className="create-channel-container" onSubmit={this.handleSubmit}>
        <h2 className="create-channel-title">Create Text Channel</h2>
        <div className="create-channel-input-container">
          <h5>CHANNEL NAME</h5>
          <input type="text" value={this.state.channel_name} placeholder="Enter a Channel Name" onChange={this.updateChannelName.bind(this)}></input>
        </div>
        <div className="create-channel-buttons">
          <button className="create-channel-button" onClick={this.handleSubmit}>Create Channel</button>
          <button className="cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
        </div>
      </form>
    );
  };
};
