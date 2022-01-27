import React from "react";
import AccommodationList from "../components/accommodations/AccommodationList";
import Heading from "../components/common/Heading";

const Accommodations = () => {
  return(
    <>
      <Heading size="1">Accommodations</Heading>
      <AccommodationList/>
    </>
  );
};

export default Accommodations;
