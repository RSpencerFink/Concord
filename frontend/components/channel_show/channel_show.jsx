import React from 'react';
import ChatLogContainer from '../chat/chat_log_container';
import ChatInputContainer from '../chat/chat_input_container';

export default class ChannelShow extends React.Component{
  render(){
    return (
      <div className="chat-column">
        <ChatLogContainer />
        <ChatInputContainer />
      </div>
    );
  }
}
