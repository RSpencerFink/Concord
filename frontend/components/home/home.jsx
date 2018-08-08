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
          <Route path="/servers/:server_id/channels/:id" render={(props) => <ServerShowContainer {...props} cableApp={this.props.cableApp}/>}/>
          <Route path="/servers/:server_id" render={(props) => <ServerShowContainer {...props} cableApp={this.props.cableApp}/>}/>
        </Switch>
      </div>
    );
  }
}
