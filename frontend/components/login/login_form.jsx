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

  componentDidMount(){
    this.props.fetchUsers()
  }

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
    const testuser = {email: "Test@Testing.com", password: "password"}
    this.props.action(testuser);
  };

  render () {
    return (
      <div className="login">
        <div>
          <div className="login-logo">
            <img src={concordLogoWhite} width="260"></img>
          </div>
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
            <h1 className="login-title">Welcome back!</h1>
            <h3 className="login-title">We're so excited to see you again!</h3>
            <h5>EMAIL</h5>
            <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>


            <h5>PASSWORD</h5>
            <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>


            <button className="login-button">Login</button>
            <div className="need-account">
              <span className="login-text">Need an account? </span>
              <Link className="login-link" to="/register">Register</Link>
            </div>
            <button className="login-button" onClick={this.handleSubmitTester.bind(this)}>Demo User</button>
          </form>
        </div>
      </div>
    )
  };
};
