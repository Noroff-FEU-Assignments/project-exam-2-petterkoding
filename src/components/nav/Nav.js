import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <header>
      <NavContainer className="nav-container">
        <Link to="/" exact="true" className="logo">
          Holidaze
        </Link>
        <nav>
          <NavLink to="/" exact="true">
            Home
          </NavLink>
          <NavLink to="/accommodations">Accommodations</NavLink>
          <NavLink to="/contact-us">Contact us</NavLink>
        </nav>
      </NavContainer>
    </header>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: black;
  }
`;

export default Nav;
