import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexContainer>
                    <div>
                        Holidaze 2022&copy;
                    </div>
                    <List>
                        <FooterLinks to="#">About us</FooterLinks>
                        <FooterLinks to="#">Hosting</FooterLinks>
                        <FooterLinks to="#">Members</FooterLinks>
                        <FooterLinks to="#">FAQ</FooterLinks>
                    </List>
                    <List>
                        <FooterLinks to="#">Help</FooterLinks>
                        <FooterLinks to="/contact-us">Contact</FooterLinks>
                        <FooterLinks to="#">Insurance</FooterLinks>
                        <FooterLinks to="#">Policy</FooterLinks>
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
    margin-top: 7rem;
    color: white;
    flex-shrink: 0;
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

const FooterLinks = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 0.3rem 0.5rem;
    background: transparent;
    color: #ffffff;
    transition: all 0.15s ease;

    &:hover{
        cursor: pointer;
        background: #e9e9e98b;
    }
`;

