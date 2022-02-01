import React from 'react';
import styled from "styled-components";

const Paragraph = ({children}) => {
    return <StyledP>{children}</StyledP>;
};

export default Paragraph;

const StyledP = styled.p`
    color: ${props => props.theme.darkGrey};
    font-size: 1.2rem;
    max-width: 660px;
    margin: 1rem 0 2rem 0;
`;
