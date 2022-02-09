import React from "react";
import LoginForm from "../components/login/LoginForm";
import Heading from "../components/common/Heading";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Heading size="1">Login</Heading>
      <LoginForm />
    </Container>
    );
};

export default Login;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  @media (max-width: 680px){
    margin-top: 0rem;
  }
`;