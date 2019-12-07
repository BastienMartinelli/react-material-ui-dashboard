import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import AppStore from "store/AppStore";
import PrivateApp from "containers/PrivateApp";
import SignIn from "containers/SignIn";

import { lightTheme } from "utils/theme";
import PrivateRoute from "components/PrivateRoute";

function App() {
  return (
    <AppStore.Provider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <PrivateRoute loginPath="/auth" exact path="/">
              <PrivateApp />
            </PrivateRoute>
            <Route path="/auth">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AppStore.Provider>
  );
}

export default App;
