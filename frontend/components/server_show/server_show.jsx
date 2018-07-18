import React from 'react';
import CurrentServerInfoContainer from './current_server_info_container';
import CurrentUserContainer from '../current_user/current_user_container';
import ChannelListContainer from '../channel_list/channel_list_container';
import CurrentChannelInfoContainer from '../current_channel/current_channel_info_container';
import UsersShowContainer from '../users_show/users_show_container'

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

  componentWillReceiveProps(){
    // if (Number(this.props.match.params.id) !== this.props.currentServerIds) {
    //   this.props.fetchServer(Number(this.props.match.params.id)).then(() => {
    //     return this.props.receiveCurrentServer(Number(this.props.match.params.id))
    //   })
    // }
    if (this.props.currentServerId === null && this.props.channels[this.props.currentChannelId]) {
      this.props.fetchServer(this.props.channels[this.props.currentChannelId].server_id).then(() => {
        this.props.receiveCurrentServer(this.props.channels[this.props.currentChannelId].server_id)
      })
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
            <div className="chat-window">Chat PLaceHolder</div>
            <UsersShowContainer />
          </div>
        </div>
      </div>
    );
  }
}
