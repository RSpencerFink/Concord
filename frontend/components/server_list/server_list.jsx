import React from 'react';

export default class ServerList extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = props.users[props.currentUserId]
    // this.servers = props.servers.filter((server) => this.currentUser.servers.includes(server.id))
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="server-list-container">
        <ul>
          <li>Temp Server List</li>
        </ul>
      </div>
    );
  };
};
