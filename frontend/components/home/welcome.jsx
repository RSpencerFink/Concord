import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';

export default class Welcome extends React.Component {
  render(){
    return (
      <div>
        <CurrentUserContainer />
      </div>
    );
  }
}
