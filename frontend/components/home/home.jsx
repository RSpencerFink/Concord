import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import ServerListContainer from '../server_list/server_list_container';
import Modal from '../modal'

export default class Home extends React.Component {

  render(){
    return (
      <div className="main-page">
        <Modal />
        <ServerListContainer />
        <CurrentUserContainer />
      </div>
    );
  }
}
