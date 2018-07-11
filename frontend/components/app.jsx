import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './login/login_form_container'
import RegisterContainer from './register/register_container'
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={RegisterContainer} />
      <ProtectedRoute exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
