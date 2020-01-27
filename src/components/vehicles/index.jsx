import React from "react";
import SectionTitle from "../ui/titles/sectionTitle";
import isNil from "lodash/isNil";
import get from "lodash/get";
import { useFetchVehicles } from "./hooks";
import Vehicle from "./components/vehicle";
import VehiclePicture from "./components/vehiclePicture";

const Vehicles = ({ sectionTitle, year, match, fetchUrl }) => {
  //Done so we can use this component without router if we want
  const vehiclesYear = isNil(get(match, "params.year"))
    ? year
    : get(match, "params.year");
  const [vehicles] = useFetchVehicles(fetchUrl, vehiclesYear);

  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {!isNil(vehicles) &&
        Object.values(vehicles).map(vehicle => (
          <Vehicle>
            <VehiclePicture year={vehiclesYear} name={vehicle.name} />
          </Vehicle>
        ))}
    </>
  );
};

export default Vehicles;
