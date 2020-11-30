import React from "react";
import { Box, Heading, Text, Image } from "gestalt";
import { NavLink } from "react-router-dom";
import "./index.css";
const Navbar = () => {
  return (
    <Box
      padding={1}
      shape="roundedBottom"
      height={70}
      class="header"
      display="flex"
      justifyContent="around"
      alignItems="center"
    >
      <NavLink to="/" exact activeClassName="active">
        <Box display="flex" alignItems="center">
          <Box height={50} width={50} margin={2}>
            <Image
              alt="Logo icon"
              src="./icons/logo.svg"
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
          {/*<Heading size="xs" color="white">
            Botines Profesionales Argentina
  </Heading>*/}
          <Heading class="logo" size="md">
            BPA
          </Heading>
        </Box>
      </NavLink>

      <NavLink to="/contact" activeClassName="active">
        <Text size="md" color="white">
          Contact
        </Text>
      </NavLink>
    </Box>
  );
};
export default Navbar;
