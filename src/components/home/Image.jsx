import React from 'react'
import freepik from "../../assets/freepik.jpg";
import styled from "styled-components";

const Image = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <ColorBox/>
        <Img src={freepik} alt="" />
      </ImageContainer>
    </Wrapper>
  )
}

export default Image

const Wrapper = styled.div`
z-index: -100;
top: 65px;
left: 0;
position: fixed;
width: 100%;
@media(max-width: 680px){
  top: 60px;
}
`;

const Img = styled.img`
  width: 60%;
  object-fit: cover;
  @media(max-width: 680px){
    width: 100%;
    height: 90vh;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;

  @media(max-width: 680px){
    flex-direction: column;
  }
`;

const ColorBox = styled.div`
  background: #1145d628;
  height: 100%;
  width: 40%;

  @media(max-width: 680px){
    width: 100%;
    height: 10vh;
  }
`;