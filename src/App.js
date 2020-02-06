import React from "react";
import Nav from "./components/nav/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import Favorite from "./components/favorites/Favorites";
import { Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div id="explorer">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/favorites" component={Favorite} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
