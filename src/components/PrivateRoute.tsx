import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppStore from "store/AppStore";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, loginPath, ...rest }) {
  const { user } = AppStore.useContainer();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            exact
            to={{
              pathname: loginPath,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
