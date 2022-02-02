import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";


const Enquiries = () => {

    const [enquiries, setEnquiries] = useState([]);

    const http = useAxios();

    useEffect(() => {
        async function getEnquiries() {
            try {
                const response = await http.get("/api/enquiries");
                const json = response.data.data;
                setEnquiries(json);
            } catch (error) {
                console.log(error)
            }
        }
        
        getEnquiries();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
  return <div>Enquiry</div>;
};

export default Enquiries;
