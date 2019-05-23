import React from "react";
import NewProjectsIMG from "../img/new-project.jpg";
import { Link } from "react-router-dom";

const imgStyles = {
  width: "80%"
};

const NewProject = () => {
  return (
    <div>
      <h2>New Project</h2>
      <Link to="new-project">
        <img src={NewProjectsIMG} style={imgStyles} />
      </Link>
      
      <h1>Join the journey from idea to market</h1>
     
     <div className= "parrafo">    
     <p>
        With Crowdfund-ironhack, you have the opportunity to support entrepreneurs and
        new technology from the earliest stages of development. Be sure to
        evaluate every campaign closely and contribute at a level you can afford
        in the event that the team is unable to complete the project as planned.
        Browse campaigns, read the stories from the entrepreneurs themselves,
        evaluate the stage of development and any potential production risks -
        and then fund the projects that you want to help succeed.
      </p>
      </div>
    </div>
  );
};

export default NewProject;
