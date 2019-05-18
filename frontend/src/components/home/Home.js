import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <HomePage />
      </>
      
    )
  }
}

export default Home