import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/global.css";
import Hearder from "./components/Header";
import Contacts from "./components/contacts";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Hearder />

      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
