import React from 'react';
import UserListItem from './user_list_item';

export default class ServerUserShow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.users) {return null}
    
    const allUsers = this.props.users.map((user) => {
      return <UserListItem key={ user.id } user={ user } />
    })
    return (
      <div className="user-show-container">
        <h5 className="user-list-title">ALL MEMBERS</h5>
        <ul className="user-show-list">
          { allUsers }
        </ul>
      </div>
    )
  }
}
