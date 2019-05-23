import React from "react";
import axios from "axios";
class SingleProject extends React.Component {
  state = {
    singleProject: []
  };

  componentDidMount() {
    axios
      .get(
        `https://localhost:3000/proyects${this.props.match.params.id}`
      )
      .then(response => {
        // console.log(response.data);
        this.setState({
          singleProject: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <img
          style={{ padding: "25px", width: "75px" }}
          src={this.state.singleProject.imageURL}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.singleProject.name}</p>

          <p>{this.state.singleProject.contributor}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.singleProject.tagline}</p>
          <p>{this.state.singleProject.montoInversion}</p>
        </div>

        <div>
          <p>{this.state.singleProject.description}</p>
        </div>
      </div>
    );
  }
}

export default SingleProject;