import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";
import styled from "styled-components";


const Messages = () => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const http = useAxios();

    useEffect(() => {
        async function getMessages() {
            try {
                const response = await http.get("/api/messages");
                const json = response.data.data;
                setMessages(json);
            } catch (error) {
                console.log(error)
            }
        }
        
        getMessages();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <Container>
            {messages.map(({ attributes:{title, text, email_from}, id}) =>
                <Message key={id}>
                    <EmailFrom><i className="fas fa-paper-plane"></i> {email_from}</EmailFrom>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </Message>
            )}
        </Container>


    );
};

export default Messages;


const Container = styled.div`
    width: 100%;
`;

const Message = styled.div`
    background: white;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Title = styled.h5`
    font-size: 1rem;
    color: black;
    white-space: nowrap;
    margin-right: 2rem;
    text-align: left;
`;

const Text = styled.span`
    color: grey;
    white-space: nowrap;
    overflow: hidden;
`;

const EmailFrom = styled.span`
    margin-right: 1rem;
`;