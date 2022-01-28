import React from 'react';
import styled from "styled-components";

const HostDetails = ({ details }) => {
  console.log("hostdetails", details)
    return(
    
      <>
        {details &&
          < Container >
            <Flex>
              <InnerFlex>
                <Name>{details.name}</Name>
                <Rating>{details.rating} <i className="far fa-star"></i></Rating>
              </InnerFlex>
              <img src="" alt=""/>
            </Flex>
            <Details>
              {details.description}
            </Details>
            <ContactInfo>
              <InfoContainer>
                {details.phone}
              </InfoContainer>
              <InfoContainer>
                {details.email}
              </InfoContainer>
            </ContactInfo>
            <Button>Contact host</Button>
          </Container>}
      </>  
  );
};

export default HostDetails;

const Container = styled.div`
  padding: 1rem;
  background: ${props => props.theme.clouds};
  background: #f5f4f4;
  width: 400px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  color: black;
`;

const Rating = styled.span`
  color: red;
`;

const Details = styled.p`
  font-size: 1.1rem;
  color: #2a2a2a;
  padding: 1rem 0;
`;

const Button = styled.button`
  border: 1px solid black;
  color: black;
  background: transparent;
  padding: 0.6rem 1rem;
  border-radius: 22px;
`;

const ContactInfo = styled.address`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  color: #4e4e4e;
`;

const InfoContainer = styled.span`
  padding: 0.5rem 0;
`;