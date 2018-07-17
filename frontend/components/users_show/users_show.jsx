import React from 'react';
import UserListItem from './user_list_item';

export default class UserShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    if (!this.props.users) {
      return null
    } else {
      const allUsers = this.props.users.map((user) => {
        return <UserListItem key={ user.id } user={ user } />
      })
      return (
        <div className="user-show-container">
          <h5 className="user-list-title">ALL USERS</h5>
          <ul className="user-show-list">
            { allUsers }
          </ul>
        </div>
      )
    }
  }
}
