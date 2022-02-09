import React, {useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants/API";
import CreateMessage from "../common/CreateMessage";
import styled from "styled-components";

const ContactForm = () => {

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);


  const { handleSubmit, register, reset, formState } = useForm({ mode: "onChange" });

  const { errors, isValid } = formState;


  async function onSubmit(data) {
    setSubmitting(true);
    setError(null);
    console.log(data)
    try {
      const response = await axios.post(`${BASE_URL}/api/messsages`, {
        data: data,
      });
      console.log(response);
    } catch (error) {
      setError(error.toString());
    } finally {
      reset();
    }
  }

  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        {submitting && <CreateMessage type="success">Message sent!</CreateMessage>}
        <StyledField>
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="title"
              placeholder="Your name"
              {...register("title", {required: true, minLength: 2})}
            />
            {errors.title && <p>Name is too short</p>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject", {required: true, minLength: 5})}
            />
            {errors.subject && <p>Subject is required</p>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email_from"
              placeholder="eg. you@mail.com"
              {...register("email_from", {
                required: true, pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              }})}
            />
            {errors.email_from && <p>Must be a valid email</p>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="message">Message</Label>
            <TextArea
              type="textarea"
              name="text"
              placeholder="Start writing here"
              {...register("text", {required:true, minLength: 10})}
            />
            {errors.text && <p>Message must be atleast 10 characters</p>}
          </InputContainer>
          <Button type="submit" disabled={!isValid}>Send</Button>
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

const Button = styled.button`
  border: none;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;

  @media (max-width: 680px){
    padding: 1rem 2rem;
  }
`;

export default ContactForm;
