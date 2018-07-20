import React from 'react';

export default class MessageListItem extends React.Component{
  render(){
    return (
      <li>
        <span>{this.props.message.message}</span>
        <span>{this.props.user}</span>
      </li>
    )
  }
}
