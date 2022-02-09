import React, { useState } from 'react';
import formatDate from '../../js/DateFormat';
import { motion } from "framer-motion";
import styled from "styled-components";



const Toggle = ({ children, title, subject, date }) => {
  
  const [toggle, setToggle] = useState(false);

    // title is supposed to be NAME!!!!!!
    return (
        <Tab onClick={() => setToggle(!toggle)}>
            <Flex>
                <EmailFrom>{title}</EmailFrom>
                <Title>{subject}</Title>
                <Date>{formatDate(date)}</Date>
            </Flex>
            {toggle ? children : ""}
        </Tab>
    );
};

export default Toggle;

const Tab = styled(motion.div)`
  background:#f0f0f0;
  color: #4e4e4e;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  transition: all 1s ease;
    &:hover{
      cursor: pointer;
      background: white;
    }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem 0.5rem;
`;

const Title = styled.h5`
  font-size: 1rem;
  color: black;
  white-space: nowrap;
  margin-right: 2rem;
    @media (max-width: 680px){
      margin-right: 0;
      font-size: 0.9rem;
    }
`;

const Date = styled.span`
  text-align: right;
  margin-right: 0;
  font-size: 0.8rem;
`;

const EmailFrom = styled.span`
  margin-right: 1rem;
    @media (max-width: 680px){
      font-size: 0.8rem;
    }
`;
