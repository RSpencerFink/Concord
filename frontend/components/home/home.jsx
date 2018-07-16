import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import ServerListContainer from '../server_list/server_list_container';
import CurrentServerInfoContainer from '../server_list/current_server_info_container';
import Modal from '../modal'

export default class Home extends React.Component {

  render(){
    return (
      <div className="main-page">
        <Modal />
        <ServerListContainer />
        <div className="server-user-info">
          <CurrentServerInfoContainer />
          <CurrentUserContainer />
        </div>
      </div>
    );
  }
}
