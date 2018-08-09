import React from 'react';
import onClickOutside from "react-onclickoutside";


class CurrentServerInfo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      className: "current-server-info-dropdown"
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }
  componenDidMount(){
    this.props.fetchServer(this.props.match.params.server_id)
  }

  handleClickOutside (evt) {
    this.setState({
      className: "current-server-info-dropdown"
    })
  };

  showDropdown() {
    if (this.state.className === "current-server-info-dropdown"){
      this.setState({
        className: "current-server-info-dropdown show"
      })
    } else {
      this.setState({
        className: "current-server-info-dropdown"
      })
    }
  }

  handleClick(e){
    debugger
    const currentServerOwnerId = this.props.servers[this.props.currentServerId].server_owner_id;
    if (this.props.currentUserId === currentServerOwnerId){
      this.props.deleteServer(this.props.match.params.server_id).then(() => window.location.href = "/");
    } else {
      this.props.leaveServer(this.props.match.params.server_id).then(() => window.location.href = "/");
    }
  }

  render(){
    if (!this.props.servers[this.props.currentServerId]){
      return null
    } else {
      const currentServer = this.props.servers[this.props.currentServerId];
      const currentServerOwnerId = this.props.servers[this.props.currentServerId].server_owner_id;
      let dropDownText = ""
      if (this.props.currentUserId === currentServerOwnerId){
        dropDownText = "Delete Server"
      } else {
        dropDownText = "Leave Server"
      }
      return(
        <div className="current-server-info-wrapper">
          <div className="current-server-info" onClick={() => this.showDropdown()}>
            <span>{currentServer.server_name}</span>
            <img className="expand-arrow" src={expandArrow} ></img>
          </div>
          <div className={ this.state.className }>
            <ul className="current-server-info-dropdown-list">
              <li className="current-server-info-dropdown-list-item" onClick={this.handleClick}>
                {dropDownText}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default onClickOutside(CurrentServerInfo);
