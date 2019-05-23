import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const inputStyle = {
  border: "1px solid black",
  width: "90%",
  height: "50px",
  borderRadius: "10px"
};

class NewProject extends React.Component {
  state={
    project: {},
    photoURL :""
  }
  
  handleChange = e => {
    let { project } = this.state
      project[e.target.name] = e.target.value
      this.setState({ project })
    } 
  

  sendThisProjectToAPI = (e) => {
    e.preventDefault()
    let url = "http://localhost:3000/projects/create"
    let { photoURL, project } = this.state 
    let formData = new FormData()
    for (let key in project) {
      formData.append(key, project[key])
    }
    formData.append("picture", photoURL)
    axios.post(url, formData, {withCredentials: true})
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  handleImageChange = (e) => {
    let { photoURL } = this.state
    photoURL = e.target.files[0] 
		this.setState({photoURL})
  }

  render() {
    return (
      <form onSubmit={this.sendThisProjectToAPI}>
        <label>Name</label>
        <br />
        <input style={inputStyle} name="name" type="text" onChange={this.handleChange}/>
        <br />
        <label>Tagline</label>
        <br />
        <input style={inputStyle} name="tagline" type="text" onChange={this.handleChange}/>
        <br />
        <label>Description</label>
        <br />
        <input style={inputStyle} name="description" type="text" onChange={this.handleChange}/>
        <br />
        <label>Contributor</label>
        <br />
        <input style={inputStyle} name="contributor" type="text" onChange={this.handleChange}/>
        <br />
        <label>Monto de la inversion</label>
        <br />
        <input style={inputStyle} name="montoInversion" type="number" onChange={this.handleChange}/>
        <br />
        <label>image</label>
        <br />
        <input type="file"  name="photoURL" onChange={this.handleImageChange}/> 
        <br />

        
        <button
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "rgb(22, 183, 252)",
            margin: "10px"
          }}
        >
          Submit
        </button>

        <br />
        <button
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "rgb(22, 183, 252)",
            margin: "10px"
          }}
        >
          Delete
        </button>
      </form>
    );
  }
}


export default NewProject;
