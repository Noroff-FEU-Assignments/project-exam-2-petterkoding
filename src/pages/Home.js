import React from "react";
import Image from "../assets/homebackground.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <div>
        <Banner src={Image} alt="Sea outside Bergen city" />
      </div>
    </>
  );
};

const Banner = styled.img`
  width: 100%;
  position: relative;
  border-radius: 15px;
`;

export default Home;
