import React from 'react'

export default class LoginForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  };

  updateEmail (e) {
    this.setState({email: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Welcome back!</h1>
        <h3>We're excited to see you again!</h3>
        <label>Email
        <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
        </label>

        <label> Password
        <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
        </label>

        <button>Login</button>
      </form>
    )
  };
};
