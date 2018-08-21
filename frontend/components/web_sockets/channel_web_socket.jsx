import React from 'react';

export default class ChannelWebSocket extends React.Component {

  componentDidMount(){
    this.props.cableApp.channel = this.props.cableApp.cable.subscriptions.create({channel: "ChannelChannel", id: this.props.currentChannelId}, {
      received: (payload) => {
        console.log(payload.message);
        this.props.receiveMessage(payload.message);
      }
    })
  }

  render(){
    return (<div className="websocket"></div>)
  }
}
