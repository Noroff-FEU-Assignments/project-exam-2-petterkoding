import React from "react";
import AccommodationList from "../components/accommodations/AccommodationList";
import Heading from "../components/common/Heading";
import Paragraph from "../components/common/Paragraph";

const Accommodations = () => {
  return(
    <>
      <Heading size="1">Accommodations</Heading>
      <Paragraph>We hope you find what you're looking for! Remember that you can use the filter below to narrow down the list.</Paragraph>
      <AccommodationList/>
    </>
  );
};

export default Accommodations;
