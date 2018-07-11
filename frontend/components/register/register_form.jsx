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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Create an account</h1>
        <label>Email
        <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
        </label>

        <label>Username
        <input type="text" value={this.state.username} onChange={this.updateUsername.bind(this)}/>
        </label>

        <label> Password
        <input type="password" value={this.state.password} onChange={this.updatePassword.bind(this)}/>
        </label>

        <button>Continue</button>
        <Link to="/login">Already have an account?</Link>
      </form>
    )
  };
};
