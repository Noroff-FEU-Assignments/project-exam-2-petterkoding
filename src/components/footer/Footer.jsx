import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <SFooter>
            <Container>
                <FlexContainer>
                    <div>
                        Logo
                    </div>
                    <div>
                        <ul>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                            <li>List</li>
                        </ul>
                    </div>
                </FlexContainer>
            </Container>
        </SFooter>
    );
};

export default Footer;

const SFooter = styled.footer`
    background: ${props=>props.theme.clouds};
    height: auto;
    margin-top: 7rem;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 92rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;