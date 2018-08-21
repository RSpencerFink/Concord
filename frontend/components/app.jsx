import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import RegisterContainer from './register/register_container';
import HomeContainer from './home/home_container';
import ServerShowContainer from './server_show/server_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <AuthRoute exact path="/login" component={ LoginFormContainer } />
          <AuthRoute exact path="/register" component={ RegisterContainer } />
          <ProtectedRoute path="/" component={ HomeContainer } cableApp={ this.props.cableApp } />
        </Switch>
      </div>
    );
  }
}
