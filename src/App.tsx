import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import { CssBaseline } from "@material-ui/core";
import Dashboard from "./containers/Dashboard";
import Patient from "./containers/Patient";
import Patients from "./containers/Patients";
import Settings from "./containers/Settings";
import Ciqual from "./containers/Ciqual";

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: green["A400"]
    },
    secondary: {
      main: pink[500]
    }
  }
});

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <DashboardLayout>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/patient">
              <Patient />
            </Route>
            <Route path="/patients">
              <Patients />
            </Route>
            <Route path="/ciqual">
              <Ciqual />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </DashboardLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
