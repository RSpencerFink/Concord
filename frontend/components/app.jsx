import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './login/login_form_container';
import RegisterContainer from './register/register_container';
import HomeContainer from './home/home_container';
import ServerShowContainer from './server_show/server_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const updateAppStateChannel = (newChannel) => {
  console.log('updateAppStateChannel: ', this.state.channel)
  this.setState({
    channel: {
      channel: newChannel.channel,
      users: newChannel.users
    }
  })
}

const App = () => (
  <div className="App">
    <Switch>
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <AuthRoute exact path="/register" component={ RegisterContainer } />
      <ProtectedRoute path="/" component={ HomeContainer } />
    </Switch>
  </div>
);

export default App;
