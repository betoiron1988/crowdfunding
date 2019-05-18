import React from 'react'
import CardComponent from './CardComponent';
import axios from 'axios'

 class HomePage extends React.Component {
   state = {
     projects:[]
   }

   componentWillMount(){
     let url= "http://localhost:3000/proyects"
     axios.get(url)
      .then(projects => this.setState({projects: projects.data}))
      .catch(err => console.log(err))
   }

  render () {
    let {projects} = this.state
    console.log(projects)
    return this.state.projects.length === 0 
      ?
       <div>Cargando proyectos</div>
         :  <div>{projects.map((e,i) =>
        <CardComponent key={i} title={e.name} description={e.description} url={e.imageURL}/>
          )}</div>
    }
    }
     


 
export default HomePage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    