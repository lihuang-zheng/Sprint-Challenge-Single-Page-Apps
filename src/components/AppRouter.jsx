import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./Character";
import Locations from "./Locations";
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/locations" component={Locations} />
          <Route path="/" component={Character} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
