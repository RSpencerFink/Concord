import React from 'react';
import ServerListItem from './server_list_item';
import { Link } from 'react-router-dom';
import AddServer from './add_server'

export default class ServerList extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = props.users[props.currentUserId];
    this.state = {className: "server-name"}
    this.handleName = this.handleName.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  handleName(){
    this.setState({className: "server-name show"})
  }

  unHover(){
    this.setState({className: "server-name"})
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
          <Link onMouseOver={this.handleName} onMouseLeave={this.unHover} to="/" className="home-button">
            <span className={this.state.className}>Home</span>
          </Link>
          <div className="list-separator"></div>
          { serverListItems }
          <div className="list-separator"></div>
          <button onMouseOver={this.handleName} onMouseLeave={this.unHover} className="add-server-button" onClick={() => this.props.openModal('AddServer')}>
            <span>+</span>
            <span className={this.state.className}>Add New Server</span>
          </button>
        </ul>
      </div>
    );
  }
}
