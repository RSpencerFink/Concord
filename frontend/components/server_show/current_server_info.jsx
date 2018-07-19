import React from 'react';

export default class CurrentServerInfo extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  componenDidMount(){
    this.props.fetchServer(this.props.match.params.server_id)
  }


  handleClick(e){
    const currentServerOwnerId = this.props.servers[this.props.currentServerId].server_owner_id;
    if (this.props.currentUserId === currentServerOwnerId){
      this.props.deleteServer(this.props.match.params.id).then(() => window.location.href = "/");
    } else {
      this.props.leaveServer(this.props.match.params.id).then(() => window.location.href = "/");
    }
  }

  render(){
    if (!this.props.servers[this.props.currentServerId]){
      return null
    } else {
      const currentServer = this.props.servers[this.props.currentServerId];
      return(
        <div className="current-server-info">
          <span>{currentServer.server_name}</span>
          <img className="expand-arrow" src={expandArrow} onClick={this.handleClick}></img>
        </div>
      )
    }
  }
}
