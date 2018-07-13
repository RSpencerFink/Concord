import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import ServerListContainer from '../server_list/server_list_container';

export default class Home extends React.Component {

  render(){
    return (
      <div className="main-page">
        <ServerListContainer />
        <CurrentUserContainer />
      </div>
    );
  }
}
