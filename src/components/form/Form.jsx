import React from 'react'
import styled from "styled-components";

const Form = ({children}) => {
  return (
    <StyledForm>{children}</StyledForm>
  )
}

export default Form;

const StyledForm = styled.form`
  padding: 2rem 3rem;
  background: #ffffff;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: 4px 7px 20px rgba(0, 0, 0, .2);
  position: relative;
  margin: 2rem 0 5rem 0;

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

  @media (max-width: 680px){
    max-width: 100%;
  }
`;