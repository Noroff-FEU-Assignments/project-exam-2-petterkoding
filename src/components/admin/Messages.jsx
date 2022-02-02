import React, {useState, useEffect} from 'react';
import useAxios from "../../hooks/useAxios";


const Messages = () => {

    const [messages, setMessages] = useState([]);

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

    
  return <div>Messages</div>;
};

export default Messages;
