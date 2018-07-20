import React from 'react';

export default class MessageListItem extends React.Component{
  render(){
    return (
      <li>
        <div className="chat-log-separator"></div>
        <span>{this.props.message.message}</span>
      </li>
    )
  }
}
