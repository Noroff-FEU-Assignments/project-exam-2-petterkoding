import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <StyledField>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your name" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="eg. you@mail.com" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="message">Message</Label>
          <TextArea type="textarea" name="message" id="message" placeholder="Start writing here" />
        </InputContainer>
        <Button type="submit">Send</Button>
      </StyledField>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 3rem;
  background: #ffffff;
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
  position: relative;
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

const TextArea = styled.textarea`
  border: none;
  outline: none;
  height: 250px;
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

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
`;

export default ContactForm;
