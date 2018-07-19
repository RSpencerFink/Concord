import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import UsersShowContainer from '../users_show/users_show_container';

export default class Welcome extends React.Component {
  componentDidMount(){
    this.props.receiveCurrentChannel(null, null);
  }
  render(){
    return (
      <div className="home-page">
        <div className="home-page-user-col">
          <UsersShowContainer />
          <CurrentUserContainer />
        </div>
        <div className="welcome">
        </div>
      </div>
    );
  }
}
