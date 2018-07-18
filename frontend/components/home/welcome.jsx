import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import UsersShowContainer from '../users_show/users_show_container';

export default class Welcome extends React.Component {
  componentDidMount(){
    this.props.receiveCurrentServer(null);
    this.props.receiveCurrentChannel(null);
  }
  render(){
    return (
      <div className="home-page-user-col">
        <UsersShowContainer />
        <CurrentUserContainer />
      </div>
    );
  }
}