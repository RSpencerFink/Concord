import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import * as sessions from './util/session_api_util';
import * as users from './util/users_api_util';
import * as servers from './util/server_api_util';
import fetchUsers from './actions/user_actions';
import fetchServers from './actions/server_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.current_user){
    const preloadedState = {
      ui: {
        currentUserId: window.current_user.id
      },
      entities: {
        users: { [window.current_user.id]: window.current_user }
      }
    };
    store = configureStore(preloadedState);
    delete window.current_user;
  } else {
    store = configureStore();
  }

  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createUser = users.createUser;
  window.login = sessions.login;
  window.logout = sessions.logout;
  window.fetchUsers = fetchUsers;
  window.fetchServers = fetchServers;
  window.createServer = servers.createServer;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
