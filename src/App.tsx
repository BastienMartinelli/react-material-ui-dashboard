import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import PrivateApp from "containers/PrivateApp";
import SignIn from "containers/SignIn";

import { lightTheme, darkTheme } from "utils/theme";
import PrivateRoute from "components/PrivateRoute";
import Fallback from "components/Fallback";

import "./I18n";
import AppStore from "store/AppStore";

function App() {
  const { darkMode } = AppStore.useContainer();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <PrivateRoute loginPath="/auth" exact path="/private">
              <PrivateApp />
            </PrivateRoute>
            <Route path="/auth">
              <SignIn />
            </Route>
            <Route exact path="/">
              <SignIn />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
