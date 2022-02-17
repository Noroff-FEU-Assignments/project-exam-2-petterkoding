import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Flex>
        <div>
          <Hidden>
            <Heading
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2 }}>
              Visit Bergen
            </Heading>
          </Hidden>
          <MotionContainer
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ ease: [0,.13,.43,.98], duration: 2.2, delay: 0.7 }}>
            <Paragraph>
              Holidaze helps you find enjoyable accommodation in Bergen
            </Paragraph>
          </MotionContainer>
        </div>

        <div>
          <InputContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2.8 }}>
              <Label
                htmlFor="main-search">
                Search now</Label>
            <Input
                autoComplete="off"
                type="search"
                id="main-search"
                name="main-search"
                onChange={searchHandler}
                placeholder="Apartments, guesthouses, hotels..."/>
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
        </div>
      </Flex>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  position: relative;
  min-height: 20vh;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  column-gap: 3rem;
  
  @media (max-width:680px){
    width: 100%;
    flex-direction: column;
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

const Label = styled(motion.label)`
  display: block;
  font-size: 1.1rem;
  color: #181818;
  font-weight: 500;
`;

const InputContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 100%;

  @media (max-width:680px){
    width: 100%;
  }
`;

const Input = styled.input`
  display: inline;
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  font-size: 1.2rem;
  padding: 7px;
  
  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightGrey};
  }
`;

const SuggestList = styled.ul`
  background: transparent;
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 100;
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

