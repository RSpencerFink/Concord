import React from 'react';

export default class ServerListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {className: "server-name"}
    this.handleName = this.handleName.bind(this);
  }

  handleName(){
    this.setState({className: "server-name show"})
  }

  render() {
    return (
      <div onMouseOver={this.handleName} className="server-list-item">
        <span className={this.state.className}>{this.props.server.server_name}</span>
      </div>

    );
  }
}
