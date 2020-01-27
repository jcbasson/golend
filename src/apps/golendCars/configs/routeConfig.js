import React from "react";
import Loadable from "react-loadable";
import Loader from "../../../components/Loader";

//TODO: Implement fail safe in case vehicles.json does not exist
const LoadableVehicleYears = Loadable.Map({
  loader: {
    VehicleYears: () =>
      import(
        /* webpackChunkName: "vehicleYears" */ `../../../components/vehicles/components/vehicleYears`
      ),
    config: () =>
      import(/* webpackChunkName: "vehiclesConfig" */ `./vehicles.json`)
  },
  loading: Loader,
  delay: 300,
  render(loaded) {
    const VehicleYears = loaded.VehicleYears.default;
    const props = loaded.config.vehicles.years;
    return <VehicleYears {...props} />;
  }
});

//TODO: Implement fail safe in case vehicles.json does not exist
const LoadableVehicles = Loadable.Map({
  loader: {
    Vehicles: () =>
      import(/* webpackChunkName: "vehicles" */ `../../../components/vehicles`),
    config: () =>
      import(/* webpackChunkName: "vehiclesConfig" */ `./vehicles.json`)
  },
  loading: Loader,
  delay: 300,
  render(loaded) {
    const Vehicles = loaded.Vehicles.default;
    const props = loaded.config.vehicles.list;

    return <Vehicles {...props} />;
  }
});

export const getRoutes = () => [
  {
    path: "/vehicles",
    component: LoadableVehicleYears,
    exact: true
  },
  {
    path: "/vehicles/:year",
    component: LoadableVehicles,
    exact: true
  }
];