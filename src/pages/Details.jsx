import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL, ESTABLISHMENTS} from "../constants/API";
import HostDetails from "../components/host/HostDetails";
import ReviewList from "../components/accommodations/details/ReviewList";
import Facilities from "../components/accommodations/details/Facilities";
import Heading from "../components/common/Heading";
import house from "../assets/house.jpg";
import styled from "styled-components";

const Details = () => {

  const [details, setDetails] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [host, setHost] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const { id } = useParams();

  const qs = require('qs');
  const query = qs.stringify({
    populate: {
      reviews: {
        populate: '*'
      },
      facilities: {
        populate: '*'
      },
      host: {
        populate: ['picture'],
      },
      
    } 
    }, {
    encodeValuesOnly: true,
  });

  // const url = `${BASE_URL}${ESTABLISHMENTS}/${id}${POPULATE}*`;
  const url = `${BASE_URL}${ESTABLISHMENTS}/${id}?${query}`;

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(url);
        const json = response.data.data.attributes;
        setDetails(json);
        setFacilities(json.facilities.data);
        setReviews(json.reviews.data);
        setHost(json.host.data.attributes);
        console.log("details", json)
    
      } catch (error) {
        console.log(error)
        setErrors(error)
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [url])

  if (errors) {
    <p>Error occured...</p>
  }
  
  if (loading) return <p>Loading...</p>
  
 
  return (
    <>
      <FlexContainer>
        <MainImage src={house} alt="establishment"/>
        <HostDetails details={host}/>
      </FlexContainer>

      <Heading size="1">
        {details.title}      
        <TypeBadge>{details.type}</TypeBadge>
        <Rating>{details.rating} <i className="fas fa-star"></i></Rating>
      </Heading>

      <Address>{details.address}</Address>
      
      <Description>{details.description}</Description>

      <Facilities list={facilities} beds={details.beds} />
      
      { details && <ReviewList reviews={details?.reviews?.data} />}
      <iframe
        title="Map of Bergen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.802395602157!2d5.297999548075794!3d60.39195658115635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sno!2sno!4v1643273408372!5m2!1sno!2sno"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </>
  );
};

export default Details;


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const MainImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-right: 3rem;
`;


const TypeBadge = styled.span`
  color: ${props => props.theme.seaWater};
  border: 1px solid ${props => props.theme.seaLight};
  font-size: 1rem;
  padding: 3px 5px;
  border-radius: 22px;
  margin-left: 1rem;
`;

const Rating = styled.span`
  color: ${props => props.theme.orangeWood};
  border: 1px solid ${props => props.theme.orangeWood};
  font-size: 1rem;
  margin-left: 1rem;
  padding: 3px 5px;
  border-radius: 22px;
  font-weight: 400;
`;


const Description = styled.p`
  color: black;
  max-width: 690px;
  margin-bottom: 4rem;
`;

const Address = styled.address`
  color: ${props => props.theme.lightGrey};
  margin-bottom: 2rem;
`;


