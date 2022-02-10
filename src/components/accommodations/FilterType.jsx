import { useEffect } from "react";

function FilterType({establishments, setFiltered, activeType, setActiveType}) {
    useEffect(() => {
        if (activeType === "all") {
            setFiltered(establishments);
            return;
        };
        const filtered = establishments.filter((establishment) => establishment.attributes.type === activeType);
        setFiltered(filtered);
        
    }, [activeType, establishments, setFiltered]);
    
    return (

        <div>
            <label htmlFor="type-select">Filter Type</label>
            <select name="type" onChange={(e)=>setActiveType(e.target.value)}>
                <option value="all">All</option>
                <option value="apt">Apartment</option>
                <option value="house">House</option>
                <option value="guesthouse">Guesthouse</option>
                <option value="bnb">BnB</option>
                <option value="hotel">Hotel</option>
            </select>
        </div>
    )
};

export default FilterType;

