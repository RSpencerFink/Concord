import React from 'react'

export default class ChatInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "",
      channel_id: this.props.currentChannelId
    }

    this.updateMessage = this.updateMessage.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id){
      this.props.fetchChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
    }
  }

  updateMessage(e){
    this.setState({message: e.target.value})
  }
  render() {
    let currentChannelName
    if (this.props.channels[this.props.currentChannelId]) {
      currentChannelName = this.props.channels[this.props.currentChannelId].channel_name;
    } else {
      currentChannelName = ""
    }
    return (
      <form className="chat-input-form" onSubmit={() => this.props.createMessage(this.props.currentServerId, this.props.currentChannelId, this.state)}>
        <input className="chat-input" placeholder={`Message: ${currentChannelName}`} type="text" value={this.state.message} onChange={this.updateMessage}></input>
        <button className="chat-input-button" onClick={() => this.props.createMessage(this.props.currentServerId, this.props.currentChannelId, this.state)}></button>
      </form>
    )
  }
}
