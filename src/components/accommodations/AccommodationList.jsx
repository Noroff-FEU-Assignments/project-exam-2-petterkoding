import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ESTABLISHMENTS, POPULATE} from "../../constants/API";
import Accommodation from './Accommodation';
// import FilterType from './FilterType';
import FilterCopy from './FilterCopy';
import FilterBeds from './FilterBeds';
import FilterRating from './FilterRating';
import { motion } from 'framer-motion';
import styled from "styled-components";

const AccommodationList = () => {

    const [establishments, setEstablishments] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeType, setActiveType] = useState("all");
    const [howManyBeds, setHowManyBeds] = useState(1);
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


    return (
        <>
            <FilterOptions>
                {establishments && <FilterCopy arr={establishments} setState={setFiltered} activeFilter={activeType} setFilterOption={setActiveType} filterType="type" />}
                {establishments && <FilterBeds arr={establishments} setState={setFiltered} activeFilter={howManyBeds} setFilterOption={setHowManyBeds} filterType="beds" />}
                {establishments && <FilterRating arr={establishments} setState={setFiltered} activeFilter={howManyBeds} setFilterOption={setHowManyBeds} filterType="rating" />}
                <Button onClick={()=> setFiltered(establishments)}><i className="fas fa-redo"></i></Button>
            </FilterOptions>
            <Matches>Results: {filtered.length}</Matches>
                <Flex>
                {filtered.map(el=> {
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

const FilterOptions = styled.form`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: none;
    background: #e4e4e4;
    color: #3d3d3d;
    margin-top: 2.1rem;
    
    &:hover{
        cursor: pointer;
        color: black;
        background: #d4d4d4;
    }
`;

const Matches = styled.span`
    display: inline-block;
    color: grey;
    font-size: 0.8rem;
    margin: 1rem 0 0.5rem 0;
`;
