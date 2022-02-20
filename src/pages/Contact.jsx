import React from 'react'
import styled from "styled-components";
import Heading from '../components/common/Heading';
import ContactForm from '../components/contact/ContactForm';
import Motion from '../components/motion/Motion';

const Contact = () => {

  document.title = "Holidaze | Contact us";

  return (
    <Motion>
      <Container>
        <Heading size="1">Contact us</Heading>
        {/* <Address>
          <span>mail: holidaze@travels.com</span>
          <span>phone: 82 34 33 50</span>
          <h3>Opening hours:</h3>
          <span>Mon-Fri: 8:00-20:00</span>
          <span>Sat-Sun: 9:00-19:30</span>
        </Address> */}
        <ContactForm />
      </Container>
    </Motion>
  )
}

export default Contact


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = styled.address`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: 1rem;
  color: #2c2c2c;
`;