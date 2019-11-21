import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./containers/Dashboard";
import Patient from "./containers/Patient";
import Patients from "./containers/Patients";
import Settings from "./containers/Settings";
import Ciqual from "./containers/Ciqual";
import AppStore from "./store/AppStore";
import PatientsStore from "./store/PatientsStore";

function App() {
  return (
    <Router>
      <AppStore.Provider>
        <PatientsStore.Provider>
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
        </PatientsStore.Provider>
      </AppStore.Provider>
    </Router>
  );
}

export default App;
