import React, { useEffect, useRef } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
import AppStore from "store/AppStore";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, loginPath, ...rest }) {
  const { user } = AppStore.useContainer();
  let { path } = useRouteMatch();
  const requested = useRef(path);

  console.log(path);

  useEffect(() => {
    if (path !== "/signin") {
      requested.current = path;
    }
  }, [path]);

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
