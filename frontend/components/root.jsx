import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import LoginFormContainer from './login/login_form_container'
import actionCable from 'actioncable';

//ActionCable
const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)
//

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={ CableApp }/>
    </HashRouter>
  </Provider>
);

export default Root;
