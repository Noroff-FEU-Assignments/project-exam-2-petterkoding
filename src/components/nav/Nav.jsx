import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Header>
      <NavContainer className="nav-container">
        <Logo to="/" exact="true" className="logo">
          Holidaze
        </Logo>
        <Menu>
          <MenuFlex>
            <StyledLink to="/accommodations">Accommodations</StyledLink>
            <StyledLink to="/host">Host</StyledLink>
            <StyledLink to="/contact-us">Contact us</StyledLink>
          </MenuFlex>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </Menu>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 92rem;
  margin: 0 auto;
  padding: 0 10px;
  a {
    color: black;
  }
`;

const Logo = styled(Link)`
  flex: 1;
  font-size: 2rem;
  color: black;
  text-decoration: none;
`;

const Menu = styled.nav`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .login-btn {
    border: none;
    background: ${props => props.theme.seaWater};
    color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.25s ease;
    &:hover {
      background: ${props => props.theme.seaLight};
    }
  }
`;

const MenuFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export default Nav;
