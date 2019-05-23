import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/homepage/index";
import AllProject from "./components/views/AllProjects";
import SingleProject from "./components/views/SingleProject";
import NewProject from "./components/views/NewProject";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/projects" component={() => <AllProject />} />
        <Route
          exact
          path="/projects/:id"
          component={props => <SingleProject {...props} />}
        />
        <Route exact path="/new-project" component={() => <NewProject/>} />
      </Switch>
    </div>
  );
}

export default App;