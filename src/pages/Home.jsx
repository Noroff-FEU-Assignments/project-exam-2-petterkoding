import axios from "axios";
import React, {useEffect, useState} from "react";
import HeroSection from "../components/home/HeroSection";
import { BASE_URL, ESTABLISHMENTS, query } from "../constants/API"
import LearnHosting from "../components/host/LearnHosting";
import Featured from "../components/home/Featured";
import Loading from "../components/loading/Loading";

const Home = () => {

  const [establishments, setEstablishments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEstablishments() {
      const url = `${BASE_URL}${ESTABLISHMENTS}?${query}`;
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
  }, []);


  if (error) return <p>error</p>;

  if (loading) return <Loading/>;

  return (
    <>
      <HeroSection establishments={establishments} />
      <Featured arr={establishments}/>
      <LearnHosting/>
    </>
  );
};


export default Home;



