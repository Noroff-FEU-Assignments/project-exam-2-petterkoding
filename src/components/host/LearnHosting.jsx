import React from 'react';
import styled from 'styled-components';
import host from "../../assets/host.jpg"
import boat from "../../assets/boat.jpg"
import Heading from '../common/Heading';

const LearnHosting = () => {
    return (
        <Wrapper>   
            <Grid>
                <TextContainer>
                    <Heading size="2">Say Hi to Lars 👋</Heading>
                    <Paragraph>
                        At just 24 years old, he's been hosting his own apartment for 2 years already.
                        Now he's ready to share some of his success with you.
                    </Paragraph>
                    <Button>Learn more</Button>
                </TextContainer>
                
                <ImageContainer>
                    <Image src={host} alt="smiling young man" />
                </ImageContainer>
            </Grid>

            <Grid>
                <ImageContainer>
                    <Image src={boat} alt="Boat docked at the harbour in Bergen" />
                </ImageContainer>
                
                <TextContainer>
                    <Heading size="2">Boat trip</Heading>
                    <Paragraph>
                        He loves the sea and taking you out on a spectacular view is his favourite thing to do.
                        This sought after trip does always bring a smile on your face.
                    </Paragraph>
                </TextContainer>
            </Grid>
        </Wrapper>
    );
};

export default LearnHosting;

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 10rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    height: 100%;
    margin-bottom: 5rem;
    @media(max-width: 980px){
        grid-template-columns: 1fr;
        margin-bottom: 1rem;
    }
`;


const TextContainer = styled.div`
    color: #000000;
    padding: 1rem 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 980px){
        padding: 3rem 0;
    }
`;

const Paragraph = styled.p`
    max-width: 550px;
    margin-top: 2rem;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 600px;
    object-fit: cover;
    padding: 4rem;
    @media(max-width: 980px){
        padding: 0;
        height: 500px;
    }
`;

const Button = styled.button`
    border: 1px solid black;
    padding: 1rem 2rem;
    border-radius: 22px;
    background: transparent;
    margin-top: 4rem;
    font-weight: 600;
`;
