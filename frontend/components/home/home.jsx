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
        <p>Username: {currentUser.username}</p>
        <p>Email: {currentUser.email}</p>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  };
};
