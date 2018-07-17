import React from 'react'

export default class UserListItem extends React.Component {
  render(){
    return(
      <li className="user-list-item">
        <div className="friend-portrait"></div>
        <span className="friend-list-username">{this.props.user.username}</span>
      </li>
    )
  }
}
