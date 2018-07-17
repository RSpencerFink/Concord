import React from 'react';
import ServerListItem from './server_list_item';
import { Link } from 'react-router-dom';
import AddServer from './add_server'

export default class ServerList extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = props.users[props.currentUserId];
    this.state = {
      HomeClassName: "server-name",
      NewClassName: "server-name"
    }
    this.hoverHome = this.hoverHome.bind(this);
    this.unHoverHome = this.unHoverHome.bind(this);
    this.hoverNew = this.hoverNew.bind(this);
    this.unHoverNew = this.unHoverNew.bind(this);
  }

  hoverHome(){
    this.setState({HomeClassName: "server-name show"})
  }

  unHoverHome(){
    this.setState({HomeClassName: "server-name"})
  }

  hoverNew(){
    this.setState({NewClassName: "server-name show"})
  }

  unHoverNew(){
    this.setState({NewClassName: "server-name"})
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
          <Link onMouseOver={this.hoverHome} onMouseLeave={this.unHoverHome} to="/" className="home-button">
            <span className={this.state.HomeClassName}>Home</span>
          </Link>
          <div className="list-separator"></div>
          { serverListItems }
          <div className="list-separator"></div>
          <button onMouseOver={this.hoverNew} onMouseLeave={this.unHoverNew} className="add-server-button" onClick={() => this.props.openModal('AddServer')}>
            <span>+</span>
            <span className={this.state.NewClassName}>Add New Server</span>
          </button>
        </ul>
      </div>
    );
  }
}
