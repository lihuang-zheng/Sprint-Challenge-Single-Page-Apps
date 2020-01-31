import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./Character";
import Locations from "./Locations";
import WelcomePage from "./WelcomePage";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Character</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/locations" component={Locations} />
          <Route path="/characters" component={Character} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
