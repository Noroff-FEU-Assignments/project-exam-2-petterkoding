import React from 'react'
import styled from "styled-components";

export default <StyledInput/>

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #363636;
    text-transform: capitalize;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1rem;
  background: none;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 7px;
  box-shadow: 1px 2px 4px rgba(0,0,0,0.1);

  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }

  &:focus{
    border: 2px solid #2c9dd1;
  }
`;


const InputContainer = styled.div`
  margin: 0.5rem 0 2rem 0;
  position: relative;
  width: 100%;
`;