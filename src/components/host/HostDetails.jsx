import React from 'react';
import styled from "styled-components";
// import profile from "../../assets/profile.jpg"

const HostDetails = ({ details }) => {

  const { name, description, rating, phone, email, picture: { data: { attributes:{ url }}} } = details;

    return(
        < Card >
          <Flex>
            <ProfilePic src={url} alt="a man wearing glasses"/>
            <InnerFlex>
              <Name>{name}</Name>
              <Rating>{rating} <i className="fas fa-medal"></i></Rating>
            </InnerFlex>
          </Flex>
            <Details>
              {description}
            </Details>
            <ContactInfo>
              <InfoContainer>
                tel: {phone}
              </InfoContainer>
              <InfoContainer>
                mail: {email}
              </InfoContainer>
            </ContactInfo>
            <Button>Contact host</Button>
        </Card>
  );
};

export default HostDetails;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 2rem;
  border: 1px solid ${props => props.theme.clouds};
  border-radius: 15px;

  @media (max-width: 1145px) {
    img{
      width: 85px;
      height: 85px;
      margin-right: 1rem;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
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
  margin-top: 2rem;
  max-width: 600px;

`;

const Button = styled.button`
  border: 1px solid black;
  color: black;
  background: transparent;
  padding: 1rem 2rem;
  border-radius: 22px;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
`;

const ContactInfo = styled.address`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  color: #4e4e4e;
 
`;

const InfoContainer = styled.span`
  padding: 0.2rem 0;
`;

const ProfilePic = styled.img`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 2rem;
`;