import React from 'react'
import styled from "styled-components";

const TextArea = () => {
  return <StyledTextArea />
}

export default TextArea;


const StyledTextArea = styled.textarea`
  border: none;
  outline: none;
  height: 200px;
  width: 100%;
  resize: none;
  background: none;
  font-size: 1rem;
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