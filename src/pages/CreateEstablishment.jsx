import React, { useState, useEffect } from 'react'
import useAxios from '../hooks/useAxios';

const CreateEstablishment = () => {

    const [newEstablishment, setNewEstablishment] = useState({});
    const [errors, setErrors] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const http = useAxios();

    useEffect(() => {
        async function createEstablishment() {
            try {
                const response = await http.post("api/establishments");
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        createEstablishment()
      //eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])
    
    
    return (
        <div>
            Create new Establishment
        </div>
    )
}

export default CreateEstablishment
