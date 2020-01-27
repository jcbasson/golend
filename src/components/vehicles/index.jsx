import React from "react";
import styled from "styled-components";
import SectionTitle from "../ui/titles/sectionTitle";

const Vehicles = ({ sectionTitle }) => {
  console.log("sectionTitle = ", sectionTitle);
  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
    </>
  );
};

export default Vehicles;
