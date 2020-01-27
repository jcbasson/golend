import React from "react";
import SectionTitle from "../ui/titles/sectionTitle";
import isNil from "lodash/isNil";
import get from "lodash/get";
import { useFetchVehicles } from "./hooks";
import Vehicle from "./components/vehicle";
import VehiclePicture from "./components/vehiclePicture";
import VehicleInfo from "./components/vehicleInfo";

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
          <Vehicle key={vehicle.id}>
            <VehiclePicture year={vehiclesYear} name={vehicle.name} />
            <VehicleInfo
              year={vehiclesYear}
              model={vehicle.model}
              series={vehicle.series}
              variant={vehicle.variant}
            ></VehicleInfo>
          </Vehicle>
        ))}
    </>
  );
};

export default Vehicles;
