import React, { Component } from 'react'
import CardBeer from './CardProyect';
import axios from 'axios'
import CardProyect from './CardPoject';

export default class AllBeers extends Component {
  state = {
    proyects: [] 
  }
  
 componentDidMount () {
   axios 
   .get ('./')
   .then (({data}) =>{
     this.setState({proyects:data})
   })
   .catch(error => console.error(error))
 } 

  render() {
    return (
      <div>
        <h1>All proyects</h1>
        {this.state.projects.map((proyect,i) => {
         return(
           <CardProyect {...proyect} />
         ) 
      })}
      </div>
    )
  }
}