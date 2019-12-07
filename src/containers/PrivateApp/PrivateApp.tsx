import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Dashboard from "containers/Dashboard";
import Settings from "containers/Settings";
import AppStore from "store/AppStore";
import { lightTheme, darkTheme } from "utils/theme";

import DashboardLayout from "./DashboardLayout";
import { CssBaseline } from "@material-ui/core";

function PrivateApp() {
  const { darkMode } = AppStore.useContainer();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <DashboardLayout>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
}

export default PrivateApp;
