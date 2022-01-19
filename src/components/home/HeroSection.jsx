import React from "react";
import Banner from "./Banner";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <Banner />
      <Card>
        <InnerContainer>
          <Heading>Visit Bergen</Heading>
          <Paragraph>
            Holidaze helps you find enjoyable accommodation in Bergen
          </Paragraph>
          <InputContainer>
            <Label htmlFor="main-search">Search now</Label>
            <Input
              type="search"
              id="main-search"
              name="main-search"
              placeholder="Apartments, guesthouses, hotels..."
            />
            <Button>
              <i className="fas fa-search"></i>
            </Button>
          </InputContainer>
        </InnerContainer>
      </Card>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Card = styled.div`
  position: absolute;
  left: 50%;
  bottom: -230px;
  // bottom: 10%;
  height: 400px;
  width: 80%;
  background: white;
  transform: translateX(-50%);
  border-radius: 15px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.seaBlack};
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
  color: ${(props) => props.theme.darkGrey};
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  color: black;
`;

const InputContainer = styled.div`
  position: relative;
  width: 400px;
  &:after {
    position: absolute;
    content: "";
    width: 80%;
    height: 2px;
    left: 0px;
    bottom: 0px;
    background: black;
  }
`;

const Input = styled.input`
  display: inline;
  border: none;
  outline: none;
  height: 40px;
  width: 350px;
  width: 80%;
  position: relative;
  font-size: 1.2rem;

  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const Button = styled.button`
  display: inline;
  border: none;
  font-size: 1.2rem;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-left: 1rem;
  background: ${(props) => props.theme.seaLight};
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;
