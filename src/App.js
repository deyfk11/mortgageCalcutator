import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mortgage from "./components/Mortgage/Mortgage";
import ChoosedMortgage from "./components/ChoosedMortgage/ChoosedMortgage";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Mortgage} />
      <Route exact path="/choosedMortgage" component={ChoosedMortgage} />
    </Switch>
  </Router>
);
export default App;
