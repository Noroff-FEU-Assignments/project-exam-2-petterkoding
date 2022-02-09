import React, {useState} from 'react';
import styled from "styled-components";
import Toggle from "./Toggle";

const TabLink = ({ attributes }) => {
  const { title, subject, message, text, email_from, createdAt } = attributes;

  const [toggleMessage, setToggleMessage] = useState(false);

  return (
    <Toggle
      title={title}
      date={createdAt}
      subject={subject}
      onClick={() => setToggleMessage(!toggleMessage)}>
      <MessageContainer>
        <Title>Message</Title>
        <EmailFrom>{email_from}</EmailFrom>
        <Message>{text}{message}</Message>
      </MessageContainer>
    </Toggle>
  );
};

export default TabLink;

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

const MessageContainer = styled.div`
  transition: all 0.4s ease;
  padding: 1rem 0.5rem;
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