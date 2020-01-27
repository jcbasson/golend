import React from "react";
import SectionTitle from "../ui/titles/sectionTitle";
import isNil from "lodash/isNil";
import get from "lodash/get";
import { useFetchVehicles } from "./hooks";
import Vehicle from "./components/vehicle";

const Vehicles = ({
  sectionTitle,
  year,
  match,
  fetchUrl,
  cdnUrl,
  currency
}) => {
  //Done so we can use this component without router if we want
  const vehiclesYear = isNil(get(match, "params.year"))
    ? year
    : get(match, "params.year");
  console.log("fetchUrl", fetchUrl);
  const [vehicles] = useFetchVehicles(fetchUrl, vehiclesYear);

  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {!isNil(vehicles) &&
        Object.values(vehicles).map(vehicle => (
          <Vehicle
            {...vehicle}
            year={vehiclesYear}
            cdnUrl={cdnUrl}
            currency={currency}
          />
        ))}
    </>
  );
};

export default Vehicles;
