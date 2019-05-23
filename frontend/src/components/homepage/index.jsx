import React from "react";
import Projects from "./Projects";
import NewProject from "./NewProject";

const homeStyles = {
  display: "flex",
  flexDirection: "column"
};

const Home = () => {
  return (
    <div style={homeStyles}>
      <Projects />
      <NewProject />
    </div>
  );
};

export default Home;
