import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './index'
import Projects from '../views/AllProjects'



class Home extends React.Component {
  render() {
    return (
      <div className="homeTitle">
        
        <h1>Crowdfund-Ironhack</h1>
        
        <HomePage />
      
     </div> 
      
    )
  }
}

export default Home



