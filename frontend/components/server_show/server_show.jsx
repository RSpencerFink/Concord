import React from 'react';
import CurrentServerInfoContainer from './current_server_info_container';
import CurrentUserContainer from '../current_user/current_user_container';


export default class ServerShow extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <div className="server-user-info-column">
          <CurrentServerInfoContainer />
          <CurrentUserContainer />
        </div>
      </div>
    );
  }
}
