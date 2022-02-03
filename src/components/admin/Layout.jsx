import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from "styled-components";
import Heading from '../common/Heading';

const Layout = () => {
    return (
    <Wrapper>
        <StyledHeading size="2">Messages</StyledHeading>
        <Card>
            
        </Card>
    </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div`
    margin: 5rem 0 4rem 0;
`;

const Card = styled.div`
    width: 100%;
    height: 90vh;
    background: #DBD9EC;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    margin: 0.5rem 0;
`;

const StyledHeading = styled(Heading)`
    color: blue;
`;