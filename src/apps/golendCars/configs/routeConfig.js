import React from "react";
import Loadable from "react-loadable";
import Loader from "../../../components/Loader";

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

const LoadableVehicles = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "vehicles" */ `../../../components/DynamicPage`
    ),
  loading: Loader,
  delay: 300
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
