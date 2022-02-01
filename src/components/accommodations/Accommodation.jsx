import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg"

const Accommodation = ({ attributes, id }) => {
    const { accommodation_type, short_description, address, title, rating} = attributes;

    return(
        <CardLink to={`./${id}`}>
            <ImgContainer>
                <Image src={banner} alt={title}/>
            </ImgContainer>
            <TextContainer>
                <Info>{accommodation_type}, {address}</Info>
                <Title>{title}</Title>
                <Description>{short_description}</Description>
                <Rating>{rating} <i className="fas fa-star"></i></Rating>
            </TextContainer>
        </CardLink>
    );
};



export default Accommodation;


const CardLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    padding: 2rem 1.2rem;
    background: #f3f3f3;
    margin: 1rem 0;
    text-decoration: none;
    color: black;

    @media (max-width: 800px) {
        flex-direction: column;
        img{
            width: 100%;
            height: 280px;
        }

    }
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const TextContainer = styled.div`
    flex: 2;
    margin-left: 2rem;
    @media (max-width: 800px) {
        margin-left: 0;

    }
`;

const Image = styled.img`
    display: block;
    width: 400px;
    height: 350px;
    object-fit: cover;
`;

const Info = styled.span`
    display: block;
    color: #a7a7a7;
    margin-top: 2rem;
`;

const Title = styled.h3`
    text-transform: capitalize;
    color: #2c2c2c;
    margin-top: 2rem;
`;

const Description = styled.span`
    display: block;
    color: #3d3d3d;
    margin-top: 0.5rem;
`;

const Rating = styled.span`
    display: block;
    color: ${props => props.theme.orangeWood};
    margin-top: 2rem;
`;

