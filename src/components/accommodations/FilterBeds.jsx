import { useEffect } from "react";
import styled from "styled-components";

function FilterBeds({ arr, setState, activeFilter, setFilterOption, filterType }) {
    
    let filterBy = {};

    if (filterType === "beds") {
        filterBy = {
            type: "beds",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        } 
    }
    useEffect(() => {
        if (activeFilter === "all") {
            setState(arr);
            return;
        };
        const filtered = arr.filter((establishment) => establishment.attributes.beds >= activeFilter);
        setState(filtered);
        
    }, [activeFilter, arr, setState]);
    
    return (

        <FilterContainer>
            <Label htmlFor="filter-select">{filterBy.type}</Label>
            <Select name={filterBy.type} onChange={(e) => setFilterOption(e.target.value)}>
                {filterBy.options.map(opt => {
                    return <Option key={opt} value={opt}>{opt}</Option>
                })}
            </Select>
        
        </FilterContainer>
    )
};

export default FilterBeds;

const FilterContainer = styled.div`
    margin: 1rem 1rem 0 0;
`;


const Option = styled.option`
    text-transform: capitalize;
`;

const Label = styled.label`
    text-transform: capitalize;
    display: block;
    font-size: 0.9rem;
    color: #333333;
`;

const Select = styled.select`
    height: 35px;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    color: #1f1f1f;
    padding: 0.2rem 0.5rem;
`;