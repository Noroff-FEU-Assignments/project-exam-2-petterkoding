import React from "react";
import styled from "styled-components";
import Image from "../../assets/homebackground.jpg";

const Banner = () => {
  return <Background src={Image} alt="Sea outside Bergen city" />;
};

export default Banner;

const Background = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
`;
