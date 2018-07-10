import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './login/login_form_container'
const App = () => (
  <div>
    <LoginFormContainer />
  </div>
);

export default App;
