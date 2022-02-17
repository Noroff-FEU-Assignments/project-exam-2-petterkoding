import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexContainer>
                    <div>
                        Holidaze
                    </div>
                    <List>
                        <li>About us</li>
                        <li>Learn hosting</li>
                        <li>Articles</li>
                        <li>FAQ</li>
                    </List>
                    <List>
                        <li>Help</li>
                        <li>Contact</li>
                        <li>Insurance</li>
                        <li>Policy</li>
                    </List>
                </FlexContainer>
            </Container>
        </SFooter>
    );
};

export default Footer;

const SFooter = styled.footer`
    background: ${props=>props.theme.seaBlack};
    height: 180px;
    /* margin-top: 7rem; */
    color: white;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 92rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 1rem;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const List = styled.ul`
    list-style: none;
`;