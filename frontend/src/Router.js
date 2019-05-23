import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/homepage/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import NewProject from './components/views/NewProject';
import Projects from './components/views/AllProjects';
import NavBar from './components/NavBar'

const Router = () => (
  <div>
  <NavBar/>

  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/new-project" component={NewProject} />
    <Route exact path="/projects" component={Projects} />

  </Switch>
  </div>
)

export default Router