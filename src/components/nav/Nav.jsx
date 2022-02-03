import React, {useState, useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import styled from "styled-components";

const Nav = () => {

  const [auth, setAuth] = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const history = useNavigate();

  async function logout() {
    const confirmLogout = window.confirm("You're logging out. Are you sure?")

    if (confirmLogout) {
      try {
        setAuth(null);
        history("/");
        setMenuOpen(!menuOpen);
      } catch (error) {
        console.log(error)
      }
    }
  }


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
          {auth ? 
            <>
              <StyledLink to="/admin" className="admin-link"><i className="fas fa-user"></i>Admin</StyledLink>
              <button onClick={logout}  className="logout-btn">Logout</button>
            </>
           :
          <Link to="/login" className="login-btn">
            Login
          </Link>
          }
        </Menu>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 0;
  margin-bottom: 4rem;
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
  font-weight: 400;
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

  .login-btn, .logout-btn {
    border: none;
    background: ${props => props.theme.seaWater};
    color: white;
    padding: 0.7rem 1.3rem;
    border-radius: 20px;
    text-decoration: none;
    transition: all 0.25s ease;
    margin-left: 2rem;
    &:hover {
      cursor: pointer;
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
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 4px 6px;
  transition: all 0.25s ease;

  &:hover{
    border: 1px solid ${props => props.theme.seaLight};
  }

  &.active {
    border: 1px solid ${props => props.theme.seaLight};
    border-radius: 20px;
    padding: 4px 6px;   
  }

  &.admin-link{
    display: flex;
    font-weight: 600;
    i{
      padding-right: 3px;
    }
  }
`;


export default Nav;
