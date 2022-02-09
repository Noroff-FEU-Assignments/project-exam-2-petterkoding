import React from 'react'
import styled from "styled-components";

const CreateMessage = ({ type, children }) => {
    return (
        <Message className={`message ${type}`}>
            {children}
        </Message>
    );
}

export default CreateMessage;


const Message = styled.div`
    font-size: 1rem;
    padding: 0.5rem 0.4rem;
    color: black;
    text-align: center;
    border-radius: 22px;

    &.error{
        color: red;
        border: 1px solid red;
    }

    &.success{
        color: green;
        border: 1px solid green;
    }
`;