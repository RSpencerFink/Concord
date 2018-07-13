import React from 'react';
import ServerListItem from './server_list_container';

export default class ServerList extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = props.users[props.currentUserId];
    this.currentUserServers = [];
  }
  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    const serverListItems = this.props.servers.map((server) => {
      return (<ServerListItem key={ server.id } server={ server } />)
    });
    return (
      <div className="server-list-container">
        <ul>
          { serverListItems }
        </ul>
      </div>
    );
  };
};
