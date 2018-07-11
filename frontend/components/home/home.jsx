import React from 'react'

export default class Home extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    const currentUser = this.props.users[this.props.currentUserId]
    return (
      <div>
        <h1>CONCORD</h1>
        {currentUser.username}
        {currentUser.email}
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  };
};
