import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL, ESTABLISHMENTS, query} from "../constants/API";
import HostDetails from "../components/host/HostDetails";
import ReviewList from "../components/accommodations/details/ReviewList";
import Facilities from "../components/accommodations/details/Facilities";
import Heading from "../components/common/Heading";
import EnquiryForm from "../components/contact/EnquiryForm";
import Motion from "../components/motion/Motion";
import Loading from "../components/loading/Loading";
import CreateMessage from "../components/common/CreateMessage";
import styled from "styled-components";

const Details = () => {

  const [details, setDetails] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [host, setHost] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [show, setShow] = useState(false);



  const { id } = useParams();

  const url = `${BASE_URL}${ESTABLISHMENTS}/${id}?${query}`;

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(url);
        const json = response.data.data.attributes;
        console.log(json)
        setDetails(json);
        setFacilities(json.facilities.data);
        setReviews(json.reviews.data);
        setHost(json.host?.data?.attributes);
        document.title = `Holidaze | ${json.title}`
      } catch (error) {
        console.log(error)
        setErrors(error)
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [url])


  if (errors) return <CreateMessage>{errors}</CreateMessage>;
  
  
  if (loading) return <Loading />;

 
  return (
    <Motion>
      <FlexContainer>
        <MainImage src={details.img.data.attributes.url} alt={details.img.data.attributes.alternativeText}/>
        {host && <HostDetails details={host} show={show} setShow={setShow}/>}
      </FlexContainer>

      <ToggleHostInfo onClick={()=>setShow(!show)}>View Host</ToggleHostInfo>

      <Heading size="1">
        {details.title}      
        <TypeBadge>{details.type}</TypeBadge>
        <Rating>{details.rating} <i className="fas fa-star"></i></Rating>
      </Heading>

      <Address>{details.address}</Address>
      
      <Description>{details.description}</Description>

      <Facilities list={facilities} beds={details.beds} />
      
      <ReviewList reviews={reviews} />

      <EnquiryForm/>
      
      
      <iframe
        title="Map of Bergen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.802395602157!2d5.297999548075794!3d60.39195658115635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sno!2sno!4v1643273408372!5m2!1sno!2sno"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </Motion>
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
  max-width: 750px;
  height: auto;
  object-fit: cover;
  margin-right: 2rem;
  border-radius: 15px;

  @media (max-width:980px){
    margin-right: 0;
    margin-bottom: 1rem;
    max-width: 100%;
    height: 340px;
  }
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


const ToggleHostInfo = styled.button`
  padding: 0.7rem 1rem;
  display: none;
  border: none;
  border-radius: 20px;
  border: 1px solid black;
  background: none;
  margin-left: auto;
  margin-top: -20px;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    cursor: pointer;
    background: ${props=>props.theme.seaBlack};
    color: white;
  }

  @media (max-width: 980px) {
    display: block;
  }
  @media (max-width: 600px) {
   width: 100%;
   margin-bottom: 1rem;
  }
`;