import React from 'react';
import ChatLogContainer from '../chat/chat_log_container';
import ChatInputContainer from '../chat/chat_input_container';

export default class ChannelShow extends React.Component{
  render(){
    if (!this.props.currentChannelId){
      return (
        <div className="chat-column"></div>
      )
    } else {
      return (
        <div className="chat-column">
          <ChatLogContainer />
          <ChatInputContainer />
        </div>
      );
    }
  }
}
