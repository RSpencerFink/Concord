import React from 'react';
import MessageListItem from './message_list_item'

export default class ChatLog extends React.Component{
  render(){
    if (!this.props.messages) return (<ol className="chat-window"></ol>)
    const messages = this.props.messages.map((message) => {
      return (<MessageListItem key={message.id} message={message} user={this.props.users[message.user_id]}/>)
    })
    return (
      <ol className="chat-window">
        { messages }
      </ol>
    );
  }
}
