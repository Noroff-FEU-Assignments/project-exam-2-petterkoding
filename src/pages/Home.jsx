import axios from "axios";
import React, {useEffect, useState} from "react";
import HeroSection from "../components/home/HeroSection";
import { BASE_URL, ESTABLISHMENTS } from "../constants/API"

const Home = () => {

  const [establishments, setEstablishments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEstablishments() {
      const url = BASE_URL + ESTABLISHMENTS;
      try {
        const response = await axios.get(url);
        const json = response.data.data;
        setEstablishments(json)
      } catch (error) {
        setError(error)
        console.log(error)
      } finally {
        setLoading(false);
      }
    }
    getEstablishments();
  }, [])

  return (
    <>
      <HeroSection establishments={establishments} />
    </>
  );
};


export default Home;
