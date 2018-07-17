import React from 'react';

export default class CurrentServerInfo extends React.Component {
  constructor(props){
    super(props);
  }
  componenDidMount(){
    this.props.fetchServer[this.props.match.params.serverId]
  }

  render(){
    debugger
    if (!this.props.servers[this.props.currentServerId]){
      return null
    } else {
      const currentServer = this.props.servers[this.props.currentServerId];
      return(
        <div className="current-server-info">
          <span>{currentServer.server_name}</span>
          <img className="expand-arrow" src={expandArrow}></img>
        </div>
      )
    }
  }
}
