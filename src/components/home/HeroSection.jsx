import React, { useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import mountains from "../../assets/mountains.jpg"

const HeroSection = ({ establishments }) => {
 
  const [suggestions, setSuggestions] = useState([]);

  const searchHandler = (e) => {
    const searchValue = e.target.value;
    if (searchValue.length > 0) {
      const suggestion = establishments.filter((el) => el.attributes.title.toLowerCase().includes(searchValue));
      setSuggestions(suggestion)
    }else {
      setSuggestions([])
    }
  }
  return (
    <Wrapper>
      <Card>
          <Heading>Visit Bergen</Heading>
          <Paragraph>
            Holidaze helps you find enjoyable accommodation in Bergen
          </Paragraph>
        <InputContainer>
          <Label htmlFor="main-search">Search now</Label>
          <Input
              autoComplete="off"
              type="search"
              id="main-search"
              name="main-search"
              onChange={searchHandler}
              placeholder="Apartments, guesthouses, hotels..."
            />
            <Button>
              <i className="fas fa-search"></i>
            </Button>
          <SuggestList>
            {suggestions.map(title => {
              return (
                <Suggestions key={title.id}>
                  <Link
                    className="styled-links"
                    to={`accommodations/${title.id}`}>{title.attributes.title}
                  </Link>
                </Suggestions>
              )
            })}
          </SuggestList>
          </InputContainer>
      </Card>
      <Image src={mountains} alt="mountain peaks surrounding a lake"/>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  width: 100%;
`;

const Card = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
  color: black;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
`;

const InputContainer = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
`;

const Input = styled.input`
  display: inline;
  border: none;
  outline: none;
  height: 40px;
  width: 80%;
  font-size: 1.2rem;
  padding: 7px;
  border-bottom: 2px solid ${props => props.theme.orangeWood};
  
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

const SuggestList = styled.ul`
  background: transparent;
  width: 80%;
  height: auto;
  position: absolute;
  left: 0;
  border: 1px solid #b1b1b1;
`;
const Suggestions = styled.li`
  height: 40px;
  background: white;
  list-style: none;
  border-bottom: 1px solid #3f3f3f55;
  .styled-links{
    display: block;
      width: 100%;
      height: 100%;
      color: black;
      text-transform: capitalize;
      text-decoration: none;
      transition: all 0.2s ease;
      padding-left: 7px;
      &:hover{
        background: #d4d4d3;
      }
    }
`;

