import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ServerListItem extends React.Component {
  constructor(props){
    super(props);

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

  render() {
    return (
      <NavLink to={`/servers/${this.props.server.id}`} onMouseOver={this.handleName} onMouseLeave={this.unHover} className="server-list-item" >
        <span className={this.state.className}>{this.props.server.server_name}</span>
      </NavLink>
    );
  }
}
