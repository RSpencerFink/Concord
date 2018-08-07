import React from 'react'

export default class ChatInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      channel_id: this.props.currentChannelId,
      server_id: this.props.currentServerId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.path === "/servers/:server_id") {
      return {}
    }
    if (this.props.match.params.id !== newProps.match.params.id){
      this.setState({channel_id: newProps.match.params.id});
    }
  }

  updateMessage(e){
    this.setState({ body: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state).then(this.setState({body: ""}));
  }

  render() {
    let currentChannelName
    if (this.props.channels[this.props.currentChannelId]) {
      currentChannelName = this.props.channels[this.props.currentChannelId].channel_name;
    } else {
      currentChannelName = "";
    }
    return (
      <div className="chat-input-form-container">
        <div className="chat-input-separator"></div>
        <form className="chat-input-form" onSubmit={this.handleSubmit}>
          <input className="chat-input" placeholder={`Message: ${currentChannelName}`} type="text" value={ this.state.body } onChange={ this.updateMessage }></input>
        </form>
      </div>
    )
  }
}
