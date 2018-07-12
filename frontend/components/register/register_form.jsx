import React from 'react'
import { Link } from 'react-router-dom'

export default class RegisterForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    }
  };

  updateEmail (e) {
    this.setState({email: e.target.value});
  }

  updateUsername (e) {
    this.setState({username: e.target.value});
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
      <div className="register">
        <div>
          <div className="login-logo">
            <img src={concordLogoWhite} width="260"></img>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Create an account</h1>
            <h5>EMAIL</h5>
            <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>

            <h5>USERNAME</h5>
            <input type="text" value={this.state.username} onChange={this.updateUsername.bind(this)}/>

            <h5>PASSWORD</h5>
            <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>

            <button>Continue</button>
            <div className="register-link-container">
              <Link className="register-link" to="/login">Already have an account?</Link>
            </div>

          </form>
        </div>
      </div>
    )
  };
};
