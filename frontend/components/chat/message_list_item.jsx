import React from 'react';

export default class MessageListItem extends React.Component{
  render(){
    return (
      <li className="message-list-item">
        <div className="chat-log-separator"></div>
        <div className="message">
          <div className="message-list-item-portrait"></div>
          <div className="message-list-item-text">
            <div className="message-list-item-info">
              <span className="message-list-item-user">{this.props.user.username} </span>
              <span className="message-list-item-date">{new Date(this.props.message.created_at).toDateString()} at {new Date(this.props.message.created_at).toLocaleTimeString()} </span>
            </div>
            <span className="message-list-item-body">{this.props.message.message}</span>
          </div>
        </div>
      </li>
    )
  }
}
