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

  updateMessage(e){
    this.setState({message: e.target.value})
  }
  render() {
    return (
      <div className="chat-input-container">
        <form className="chat-input" onSubmit={() => this.props.createMessage(this.props.currentServer_id, this.props.currentChannelId, this.state)}>
          <input type="text" value={this.state.message} onChange={this.updateMessage}></input>
          <button className="chat-submit-button"></button>
        </form>
      </div>
    )
  }
}
