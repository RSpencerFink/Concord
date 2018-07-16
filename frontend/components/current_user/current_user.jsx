import React from 'react';

export default class CurrentUser extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render () {
    if (!this.props.users[this.props.currentUserId]){
      return null
    } else {
      const currentUser = this.props.users[this.props.currentUserId];
    return (
      <div className="current-user" >
        <div className="current-user-data">
          <div className="current-user-portrait">
          </div>
          <div className="current-user-info">
            <span className="current-user-username">{currentUser.username}</span>
            <span className="current-user-email">{currentUser.email}</span>
          </div>
        </div>
        <div className="logout-button">
          <img className="logout-icon" src={logOutIcon} height="16px" width="auto" onClick={this.props.logout} />
        </div>
      </div>
      );
    }
  }
}
