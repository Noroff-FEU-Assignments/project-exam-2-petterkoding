import React from 'react';
import styled from "styled-components";
import Review from "./Review";
import Heading from '../../common/Heading';

const ReviewList = ({ reviews }) => {

      
    return (
        <>
            <Heading size="2">Reviews (<ReviewCount>{reviews?.length}</ReviewCount>)</Heading>
            <Flex>
                {
                    reviews?.map(
                        ({ id, attributes: { title, name, rating, review_text } }) => {
                            return <Review
                                key={id}
                                title={title}
                                rating={rating}
                                name={name}
                                text={review_text} />
                        })
                }
            </Flex>
        </>
    );
};

export default ReviewList;

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
    margin: 1rem 0 2rem 0;
`;

const ReviewCount = styled.span`
    color: #5f5f5f;
    font-size: 1.3rem;
    padding: 0 2px;
`;