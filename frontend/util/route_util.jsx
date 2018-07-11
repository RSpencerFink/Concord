import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = function({ component: Component, path, loggedIn, exact }) {
  function toRender(props) {
    if (!loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return <Component {...props}/>;
    }
  }
  return (
    <Route path={path} exact={exact} render={toRender}/>
  );
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.currentUserId)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Auth));
