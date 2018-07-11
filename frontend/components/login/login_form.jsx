import React from 'react'
import { Link } from 'react-router-dom'

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

  handleSubmitTester(e) {
    e.preventDefault();
    const testuser = {email: "test@test.com", password: "password"}
    this.props.action(testuser);
  };

  render () {
    return (
      <form className="login" onSubmit={this.handleSubmit.bind(this)}>
        <h1 className="login-title">Welcome back!</h1>
        <h3 className="login-title">We're excited to see you again!</h3>
        <label classname="login-label">Email
        <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
        </label>

        <label classname="login-label"> Password
        <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
        </label>

        <button className="login-button">Login</button>
        <p className="login-text">Need an account?</p>
        <Link className="login-link" to="/register">Register</Link>
        <button className="login-button" onClick={this.handleSubmitTester.bind(this)}>Demo User</button>
      </form>
    )
  };
};
