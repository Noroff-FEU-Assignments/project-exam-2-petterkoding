import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <StyledField>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="message">Message</Label>
          <TextArea type="textarea" name="message" id="message" />
        </InputContainer>
        <Button type="submit">Send</Button>
      </StyledField>
    </Form>
  );
};

const Form = styled.form`
  padding: 2rem 3rem;
  background: ${(props) => props.theme.clouds};
  border-radius: 15px;
  width: 600px;
`;

const StyledField = styled.fieldset`
  border: none;
`;

const InputContainer = styled.div`
  margin: 0.5rem 0 2rem 0;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 4px;
  font-size: 1.1rem;
`;

const TextArea = styled(Input)`
    height: 300px;
`;

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
`;

export default ContactForm;
