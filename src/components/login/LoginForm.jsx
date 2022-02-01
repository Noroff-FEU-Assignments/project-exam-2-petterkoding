import React from "react";
import styled from "styled-components";

const LoginForm = () => {
  return (
    <Form>
      <StyledField>
        <InputContainer>
          <Label htmlFor="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username"/>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="********" />
        </InputContainer>
        <Button type="submit">Login</Button>
      </StyledField>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 3rem;
  background: white;
  border-radius: 15px;
  width: 100%;
  max-width: 440px;
  box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
  position: relative;
  margin-top: 2rem;

  &:before{
    position: absolute;
    content:"";
    left: -7px;
    top: -7px;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: rgb(19,100,222);
    background: linear-gradient(49deg, rgba(19,100,222,1) 4%, rgba(83,48,93,1) 95%);  
    z-index: -1;
    padding: 7px;

}
`;

const StyledField = styled.fieldset`
  border: none;
`;

const InputContainer = styled.div`
  margin: 0.5rem 0 2rem 0;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #363636;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 7px;
  font-size: 1.1rem;
  background: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
`;

export default LoginForm;
