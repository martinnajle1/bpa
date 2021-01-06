import React from "react";
import { Box, Heading, Text, Image } from "gestalt";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src="./icons/bpalogo.jpg" />
      </div>
    <Box
      padding={1}
      height={50}
      display="flex"
      justifyContent="start"
      alignItems="center"
      color="white"
      marginLeft={10}
    >

      <NavLink to="/" activeClassName="active" className="menu-item">
        <Text size="md" color="darkGray">
          Home
        </Text>
      </NavLink>

      <NavLink to="/contact" activeClassName="active" className="menu-item">
        <Text size="md" color="darkGray">
          Contact
        </Text>
      </NavLink>
    </Box>
    </>
  );
};
export default Navbar;
