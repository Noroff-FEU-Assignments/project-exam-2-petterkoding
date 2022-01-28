import React from 'react';
import styled from "styled-components";
import Heading from "../../common/Heading";

const Review = ({title, name, rating, text}) => {
    return(
        <Container>
            <Heading size="3">{title}</Heading>
            <Text>{text}</Text>
            <Rating>Rating: {rating}</Rating>
            <Name>-{name}</Name>
        </Container>
    );
};

export default Review;

const Container = styled.div`
    width: 400px;
    padding: 2.5rem;
    background: #f0efef;
    border-radius: 15px;
`;

const Text = styled.p`
    font-size: 1rem;
    color: #4b4b4b;
    padding: 1rem 0;
`;

const Rating = styled.p`
    font-size: 1.1rem;
    color: #e74606;
`;

const Name = styled.p`
    text-align: right;
    font-size: 1.1rem;
    color: #2f2f2f;
    font-weight: 600;
`;