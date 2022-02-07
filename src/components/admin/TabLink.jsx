import React, {useState} from 'react';
import styled from "styled-components";

const TabLink = ({ attributes }) => {
  const { title, message, text, email_from, createdAt } = attributes;

  const [toggleMessage, setToggleMessage] = useState(false);

  const displayMessageHandler = () => {
    setToggleMessage(!toggleMessage);
  }

  return (
    <Tab onClick={displayMessageHandler}>
      <Flex>
        <EmailFrom>{email_from}</EmailFrom>
        <Title>{title}</Title>
        <Date>{createdAt}</Date>
      </Flex>
      <MessageContainer className={toggleMessage ? "open" : "closed"}>
        <Title>Message</Title>
        <Message>{text}{message}</Message>
      </MessageContainer>
    </Tab>
  );
};

export default TabLink;

const Tab = styled.div`
  background: #f0f0f0;
  color: #4e4e4e;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
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

const MessageContainer = styled.div`
  height: 100px;
  width: 100%;
  height: 0;
  

  &:hover{
    cursor: default;
  }

  &.open{ 
    opacity: 1;
    height: 100px;
    transition: all 0.4s ease;
    padding: 1rem 0.5rem;
    
  }
  &.closed{
    height: 0;
    opacity: 0;
    transition: all 0.4s ease;
  }
`;

const Message = styled.p`
  width: 100%;
  margin-top: 1rem;
  position: relative;
  max-width: 800px;

  &::before{
    content:"";
    position: absolute;
    width: 90%;
    height: 2px;
    background: ${props=>props.theme.clouds};
    left: 0;
    top: -5px;
  }
 
`;

const EmailFrom = styled.span`
  margin-right: 1rem;
    @media (max-width: 680px){
      font-size: 0.8rem;
    }
`;