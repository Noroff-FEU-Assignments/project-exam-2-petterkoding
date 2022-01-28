import React from 'react';
import styled from "styled-components";
import Heading from '../../common/Heading';

const Facilities = () => {
    return (
        <Container>
            <Heading size="2">What you get</Heading>
            <List>
                <ListItem>2 beds</ListItem>
                <ListItem>Dining room</ListItem>
                <ListItem>Shower</ListItem>
                <ListItem>Kitchen</ListItem>
                <ListItem>TV</ListItem>
            </List>
        </Container>
   );
};

export default Facilities;


const Container = styled.div`
    margin: 2rem 0;
`;

const List = styled.ul`
    list-style: none;
    margin: 0.5rem 0 2rem 0;
`;

const ListItem = styled.li`
    padding: 0.7rem 0;
`;