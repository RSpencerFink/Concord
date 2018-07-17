import React from 'react';
import CurrentServerInfoContainer from './current_server_info_container';
import CurrentUserContainer from '../current_user/current_user_container';
import ChannelListContainer from '../channel_list/channel_list_container';


export default class ServerShow extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.receiveCurrentServer(Number(this.props.match.params.id));
  }

  render(){
    debugger
    return (
      <div>
        <div className="server-user-info-column">
          <CurrentServerInfoContainer />
          <ChannelListContainer />
          <CurrentUserContainer />
        </div>
      </div>
    );
  }
}
