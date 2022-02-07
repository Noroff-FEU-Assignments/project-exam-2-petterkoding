import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";
import TabLink from './TabLink';
import styled from "styled-components";


const Messages = () => {

    const [messages, setMessages] = useState([]);

    const http = useAxios();

    useEffect(() => {
        async function getData() {
            try {
                const response = await http.get("/api/messages");
                const json = response.data.data;
                setMessages(json);
            } catch (error) {
                console.log(error)
            }
        }
        
        getData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <Container>
            {messages.map((msg, id) =>
                <TabLink
                    key={id}
                   attributes={msg.attributes}
                />
            )}
        </Container>
  );
};

export default Messages;

const Container = styled.div`
    width: 100%;
`;
