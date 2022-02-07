import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ESTABLISHMENTS, POPULATE} from "../../constants/API";
import styled from "styled-components";
import Accommodation from './Accommodation';

const AccommodationList = () => {

    const [establishments, setEstablishments] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        async function getEstablishments() {
            const url = `${BASE_URL}${ESTABLISHMENTS}${POPULATE}img`;
            try {
                const response = await axios.get(url);
                const json = response.data.data;
                setEstablishments(json)
            } catch (error) {
                console.log(error);
                setErrors(error);
            } finally {
                setLoading(false)
            }
        }
        getEstablishments();
    }, [])
    

    if (errors) return <p>....Error occured</p>;

    if (loading) return <p>....Loading</p>;

    const howManyBeds = (e) => {
        const selectedValue = e.target.value;
        const filterEstablishments = establishments.filter(bed => bed.attributes.beds >= selectedValue);
        setFiltered(filterEstablishments);
    }

    return (
            <>
                <FilterSearch>
                    <Container>
                        <label htmlFor="sort-select">Sort by</label>
                        <select name="sort" id="sort-select">
                            <option value="">Select:</option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                    </Container>  
                    <Container>
                        <label htmlFor="bed-select">Beds</label>
                        <select onChange={howManyBeds} name="beds" id="bed-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5+</option>
                        </select>
                    </Container>  
                    <Container>
                        <label htmlFor="type-select">Type</label>
                        <select name="type" id="type-select">
                            <option value="apt">Apartment</option>
                            <option value="house">House</option>
                            <option value="guesthouse">Guesthouse</option>
                            <option value="bnb">BnB</option>
                            <option value="hotel">Hotel</option>
                        </select>
                    </Container>  
                </FilterSearch>
                <Flex>
                {establishments.map(el=> {
                    return(
                        <Accommodation key={el.id} attributes={el.attributes} id={el.id} />
                    )
                })}
                </Flex>
            </>
    );
};

export default AccommodationList;


const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;

const FilterSearch = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.lightGrey};
    border-radius: 15px;
    height: auto;
    width: 100%;
    padding: 1rem 3rem;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 2rem 0 0;
    position: relative;
    

    label{
        display: block;
        font-weight: bold;
        color: #363636;
    }

    select{
        width: auto;
        height: 30px;
        padding: 5px;
    }
`;

const Container = styled.div`
    margin-right: 1.5rem;
`;