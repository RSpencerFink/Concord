import React from 'react';
import CurrentUserContainer from '../current_user/current_user_container';
import ServerListContainer from '../server_list/server_list_container';
import ServerShowContainer from '../server_show/server_show_container';
import WelcomeContainer from './welcome_container';
import Modal from '../modal';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';


export default class Home extends React.Component {

  render(){
    return (
      <div className="main-page">
        <Modal />
        <ServerListContainer />
        <Switch>
          <Route exact path="/" component={ WelcomeContainer } />
          <Route path="/channels/:id" component={ ServerShowContainer } />
          <Route path="/servers/:id" component={ ServerShowContainer } />
        </Switch>
      </div>
    );
  }
}
