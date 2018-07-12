import React from 'react'

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.currentUser = this.props.users[this.props.currentUserId]
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div className="current-user" >
        <div className="current-user-data">
          <div className="current-user-portrait">
          </div>
          <div className="current-user-info">
            <span className="current-user-username">{this.currentUser.username}</span>
            <span className="current-user-email">{this.currentUser.email}</span>
          </div>
        </div>
        <div className="logout-button">
          <img className="logout-icon" src={logOutIcon} height="16px" width="auto" onClick={this.props.logout} />
        </div>
      </div>
    )
  };
};
