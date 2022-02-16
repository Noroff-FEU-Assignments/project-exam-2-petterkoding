import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { motion } from "framer-motion";
import styled from "styled-components";


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
      <Hidden>
        <Heading
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2 }}>
          Visit Bergen
        </Heading>
        </Hidden>
        <MotionContainer
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0,.13,.43,.98], duration: 2, delay: 0.7 }}>
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
          </MotionContainer>
      </Card>
      {/* <Image/> */}
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  /* width: 400px; */
  position: relative;
  min-height: 90vh;
`;

const Card = styled.div`
  /* margin-top: 4rem; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 500px;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  /* background: #ffffff7d;
  border: 1px solid white; */
  @media (max-width:680px){
    width: 100%;
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

const MotionContainer = styled(motion.div)`
`;

const Heading = styled(motion.h1)`
  font-size: 60px;
  color: #111111;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem 0;
  color: #1a1a1a;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  color: #181818;
  font-weight: 500;
`;

const InputContainer = styled.div`
  position: relative;
  width: 350px;
  height: 100%;
`;

const Input = styled.input`
  display: inline;
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  font-size: 1.2rem;
  padding: 7px;
  border-radius: 10px;
  
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const SuggestList = styled.ul`
  background: transparent;
  width: 80%;
  height: auto;
  position: absolute;
  left: 0;
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

