import React from 'react';
import CurrentServerInfoContainer from './current_server_info_container';
import CurrentUserContainer from '../current_user/current_user_container';
import ChannelListContainer from '../channel_list/channel_list_container';
import CurrentChannelInfoContainer from '../current_channel/current_channel_info_container';
import ServerUsersShowContainer from '../users_show/server_users_show_container';
import ChannelShowContainer from '../channel_show/channel_show_container';
import ChatLogContainer from '../chat/chat_log_container';

export default class ServerShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.match.path === "/servers/:server_id") {
      this.props.fetchServer(this.props.match.params.server_id);
      this.props.receiveCurrentChannel(Number(this.props.match.params.server_id), null);
    } else {
      this.props.receiveCurrentChannel(Number(this.props.match.params.server_id), Number(this.props.match.params.id));
      this.props.fetchChannel(Number(this.props.match.params.server_id), Number(this.props.match.params.id));
    };
  };

  componentWillReceiveProps(newProps){
    if ((this.props.match.path === "/servers/:server_id") && (this.props.match.params.server_id !== newProps.match.params.server_id)) {
      this.props.fetchServer(newProps.match.params.server_id).then(() => {
        this.props.receiveCurrentChannel(Number(this.props.match.params.server_id), null);
      })
    };
    if ((this.props.match.path === "/servers/:server_id/channels/:id") && (this.props.match.params.id !== newProps.match.params.id)){
      this.props.fetchServer(newProps.match.params.server_id);
      this.props.receiveCurrentChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
      this.props.fetchChannel(Number(newProps.match.params.server_id), Number(newProps.match.params.id));
    }
  }

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
            <ChannelShowContainer />
            <ServerUsersShowContainer />
          </div>
        </div>
      </div>
    );
  }
}
