import React from 'react';
import MessageListItem from './message_list_item';

export default class ChatLog extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    if ((this.props.match.path !== "/servers/:server_id") && (this.props.match.params.id !== newProps.match.params.id)){
      this.props.fetchChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
    }
  }

  render(){
    if (!this.props.messages) {
      return (<ol className="chat-window"></ol>)
    } else {
      const messages = this.props.messages.map((message) => {
        return (<MessageListItem key={ message.id } message={ message } user={ this.props.users[message.user_id] }/>)
      })

      return (
        <ul className="chat-window">
          { messages }
          <div id="scroll-anchor"></div>
        </ul>
      );
    }
  }
}
