import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";

import AppStore from "store/AppStore";
import PrivateApp from "containers/PrivateApp";
import SignIn from "containers/SignIn";

import { lightTheme } from "utils/theme";
import PrivateRoute from "components/PrivateRoute";

import "./I18n";

function App() {
  return (
    <AppStore.Provider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Router>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <PrivateRoute loginPath="/auth" exact path="/">
                <PrivateApp />
              </PrivateRoute>
              <Route path="/auth">
                <SignIn />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </AppStore.Provider>
  );
}

export default App;
