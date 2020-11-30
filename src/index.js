import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "gestalt/dist/gestalt.css";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/"></Route>
        <Route component={Contact} exact path="/contact"></Route>
      </Switch>
    </>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
