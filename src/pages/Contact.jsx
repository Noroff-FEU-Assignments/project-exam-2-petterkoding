import React from 'react'
import styled from "styled-components";
import Heading from '../components/common/Heading';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <Container>
      <Heading size="1">Contact us</Heading>
      <ContactForm />
    </Container>
  )
}

export default Contact


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;