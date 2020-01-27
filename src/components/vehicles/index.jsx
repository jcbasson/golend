import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "../ui/titles/sectionTitle";
import isNil from "lodash/isNil";
import get from "lodash/get";
import { useFetchVehicles } from "./hooks";

const Vehicles = ({ sectionTitle, fetchUrl, year, match }) => {
  const vehiclesYear = isNil(get(match, "params.year"))
    ? year
    : get(match, "params.year");
  const [vehicles] = useFetchVehicles(fetchUrl, vehiclesYear);

  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
    </>
  );
};

export default Vehicles;
