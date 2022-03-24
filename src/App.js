import React from "react";
import "./App.css";
import Home from "./Home";
import GetStarted from "./GetStarted";
import BuyAndSell from "./BuyAndSell";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Business from "./Business";
import InstantSell from "./InstantSell";
import Login from "./Login";
import Activation from "./Activation";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/getstarted">
          <GetStarted />
        </Route>

        <Route path="/buys">
          <BuyAndSell />
        </Route>

        <Route path="/sell">
          <InstantSell />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/activate">
          <Activation />
        </Route>

        <Route path="/business">
          <Business />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
