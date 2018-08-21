import React from 'react';

export default class ChannelWebSocket extends React.Component {

  componentDidUpdate(){
    this.props.cableApp.channel = this.props.cableApp.cable.subscriptions.create({channel: "ChannelChannel", id: this.props.currentChannelId}, {
      received: (newMessage) => {
        console.log(newMessage);
        this.props.receiveMessage(newMessage);
      }
    })
  }

  render(){
    return (<div className="websocket"></div>)
  }
}
