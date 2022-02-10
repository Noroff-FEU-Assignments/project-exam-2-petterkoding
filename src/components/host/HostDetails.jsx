import React, {useState} from 'react';
import styled from "styled-components";

const HostDetails = ({ details }) => {

  const [toggleContact, setToggleContact] = useState(false);

  const { name, description, rating, phone, email, picture: { data: { attributes: { url } } } } = details;

  // const hideContact = () => {
  //   setToggleContact(false);
  // }

  return (
    <>
      <Button onClick={() => setToggleContact(!toggleContact)}>
        <i className={ toggleContact ? "fa fa-times" : "far fa-address-book"}></i>
      </Button>
      <Card className={toggleContact ? "show" : "hidden"}>
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
      </Card>
    </>
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
  transition: all 0.4s ease;


  @media (max-width: 980px) {
    position: absolute;
    top: calc(20vh);
    right: 0;
    height: 50vh;
    width: 100%;
    background: white;
  }

  &.show{
    right: 0;
  }

  &.hidden{
    right: -100%;
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

  @media (max-width: 1145px) {
    width: 75px;
    height: 75px;
    margin-right: 0.7rem;
    
  }

  @media (max-width: 680px){
    width: 60px;
    height: 60px;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 25px;
  background: #f8f8f8e2;
  border: none;
  display: none;
  transition: all 0.2s ease;

  i{
    font-size: 2rem;
    color: #575757;
  }

  &:hover{
    cursor: pointer;
    background: #eeeeee;
  }
  &:hover > i{
    color: #000000;
  }
  @media (max-width: 980px) {
    display: block;
    position: absolute;
    right: 0;
    top: 20vh;
    z-index: 100000;
  }
`;