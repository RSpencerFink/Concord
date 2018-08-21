import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import LoginFormContainer from './login/login_form_container';
import actionCable from 'actioncable';

const Root = ({ store, cableApp }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={ cableApp }/>
    </HashRouter>
  </Provider>
);

export default Root;
