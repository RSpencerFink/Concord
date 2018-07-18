import React from 'react';
import CurrentServerInfoContainer from './current_server_info_container';
import CurrentUserContainer from '../current_user/current_user_container';
import ChannelListContainer from '../channel_list/channel_list_container';
import CurrentChannelInfoContainer from '../current_channel/current_channel_info_container';
import ServerUsersShowContainer from '../users_show/server_users_show_container';
import ChannelShowContainer from '../channel_show/channel_show_container';

export default class ServerShow extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    if (this.props.match.path === "/servers/:id") {
      this.props.fetchServer(this.props.match.params.id);
      this.props.receiveCurrentServer(Number(this.props.match.params.id));
      this.props.receiveCurrentChannel(null);
    } else {
      this.props.fetchServers();
      this.props.receiveCurrentChannel(Number(this.props.match.params.id));
      this.props.fetchChannel(Number(this.props.match.params.id));
    };
  };

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchServer(newProps.match.params.id).then(() => {
        this.props.receiveCurrentServer(newProps.match.params.id)
      })
    }
  }

  // let channelRendered;
  // if (!this.props.currentChannelId) {
  //   channelRendered = null;
  // } else {
  //   channelRendered = <ChannelShowContainer className="chat-window" channelId={this.props.currentChannelId} />
  // }
  // debugger
  render(){
    return (
      <div className="server-show">
        <div className="server-user-info-column">
          <CurrentServerInfoContainer />
          <ChannelListContainer />
          <CurrentUserContainer />
        </div>
        <div className="channel-info-column">
          <CurrentChannelInfoContainer />
          <div className="chat-and-members-container">
            <div className="chat-window">Chat Placeholder</div>
            <ServerUsersShowContainer />
          </div>
        </div>
      </div>
    );
  }
}


// { channelRendered }
