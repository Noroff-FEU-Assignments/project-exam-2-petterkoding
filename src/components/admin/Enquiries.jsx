import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";
import TabLink from './TabLink';
import styled from "styled-components";


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
    }, []);

    
    return (
        <Container>
            {enquiries.map((enq, id) =>
                <TabLink
                    key={id}
                   attributes={enq.attributes}
                />
            )}
        </Container>
  );
};

export default Enquiries;

const Container = styled.div`
    width: 100%;
`;
