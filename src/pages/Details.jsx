import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL, ESTABLISHMENTS, POPULATE } from "../constants/API";

const Details = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const { id } = useParams();

  const url = `${BASE_URL}${ESTABLISHMENTS}/${id}${POPULATE}image`;

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(url);
        const json = response.data.data.attributes;
        setDetails(json);
        console.log("details",json)
      } catch (error) {
        console.log(error)
        setErrors(error)
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [url])
  
  
  return (
    <div>
      <iframe style={{border: "none"}} title="Map of Bergen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.802395602157!2d5.297999548075794!3d60.39195658115635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sno!2sno!4v1643273408372!5m2!1sno!2sno" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Details;
