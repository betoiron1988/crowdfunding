import React from "react";
import ProjectsIMG from "../img/projects.jpg";
import { Link } from "react-router-dom";

const imgStyles = {
  width: "80%"
};

const Projects = () => {
  return (
    <div>

<h2>All Projects</h2>
      <Link to="/projects">
        <img src={ProjectsIMG} style={imgStyles} />
      </Link>

      
      <h1>Fund the next big thing</h1>
      <p>
        Crowdfunding-ironhack's campaigns are where new and groundbreaking
        products take flight, sometimes long before they hit mainstream
        availability. With thousands of campaigns launching every week, there's
        great tech, design, and much more around every corner - often with
        limited-time perks and pricing for the earliest backers. Before it's
        everywhere, it's on Crowdfunding.
      </p>
    </div>
  );
};

export default Projects;
