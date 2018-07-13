import React from 'react';
import ServerListItem from './server_list_item';

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
      return (<ServerListItem key={ server.id } server={ server } />);
    });
    return (
      <div className="server-list-container">
        <h5>Server List</h5>
        <ul className="server-list">
          { serverListItems }
        </ul>
      </div>
    );
  }
}
