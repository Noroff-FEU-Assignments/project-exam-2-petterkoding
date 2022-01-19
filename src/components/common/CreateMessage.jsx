import React from 'react'
import styled from "styled-components";

const CreateMessage = ({type, msg}) => {
    return (
        <Message className={`message ${type}`}>
            {msg}
        </Message>
    );
}

export default CreateMessage;


const Message = styled.div`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    color: black;
`;