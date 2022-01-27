import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ESTABLISHMENTS, POPULATE} from "../../constants/API";
import styled from "styled-components";
import Accommodation from './Accommodation';

const AccommodationList = () => {

    const [establishments, setEstablishments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        async function getEstablishments() {
            const url = `${BASE_URL}${ESTABLISHMENTS}`;
            try {
                const response = await axios.get(url);
                const json = response.data.data;
                console.log(json)
                
                setEstablishments(json)
            } catch (error) {
                console.log(error);
                setErrors(error);
            } finally {
                setLoading(false)
            }
        }
        getEstablishments();
    },[])


    return (
        
        <Flex>
            {establishments.map(el=> {
                return(
                    <Accommodation key={el.id} attributes={el.attributes} id={el.id} />
                )
            })}
        </Flex>
    );
};

export default AccommodationList;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;