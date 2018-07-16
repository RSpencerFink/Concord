import React from 'react';
import ServerListItem from './server_list_item';
import { Link } from 'react-router-dom';
import AddServer from './add_server'

export default class ServerList extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = props.users[props.currentUserId];
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
        <ul className="server-list">
          <Link to="/" className="home-button">
          </Link>
          <div className="list-separator"></div>
          { serverListItems }
          <div className="list-separator"></div>
          <button className="add-server-button" onClick={() => this.props.openModal('AddServer')}>
            <span>+</span>
          </button>
        </ul>
      </div>
    );
  }
}
