import React from "react";
import homeIcon from "./img/home.svg";
import { Link } from "react-router-dom";
import { Button } from 'antd';


const navbarStyles = {
  backgroundColor: "black",
  width: "100%",
  height: "70px",
  padding: "20px"
};

const NavBar = () => {
  return (
    <div style={navbarStyles}>
      <Link to="/">
        <img src={homeIcon} style={{ width: "30px" }} />

      </Link>
      <Button type="primary">
      <Link to="/signup">Signup
      </Link>
      </Button>

      <Button>
      <Link to="/login">Login</Link>
      </Button>
    </div>
  );
};

export default NavBar;