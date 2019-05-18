import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/home/Home'
import AllProyects from './components/projects/AllProyecs'
import NewProyect from './components/projects/NewProyect'



const Routes = () => (
  
  
    <Switch>
      <Route exact path = {'/'} component = {Home}/>
      <Route exact path = {'/AllProjects'} component = {AllProyects}/>
      <Route exact path = {'/NewProject'} component = {NewProyect}/>
      <Route component = {() => <p> 404</p>}/>
      
    </Switch>
  
)

export default Routes