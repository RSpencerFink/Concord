import React from 'react';

export default class ServerListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {className: "server-name"}
    this.handleName = this.handleName.bind(this);
    this.unHover = this.unHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleName(){
    this.setState({className: "server-name show"})
  }

  unHover(){
    this.setState({className: "server-name"})
  }

  handleClick(){

  }

  render() {
    return (
      <div onMouseOver={this.handleName} onMouseLeave={this.unHover} className="server-list-item" onClick={}>
        <span className={this.state.className}>{this.props.server.server_name}</span>
      </div>
    );
  }
}
