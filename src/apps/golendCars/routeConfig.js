import React from "react";
import Loadable from "react-loadable";
import Loader from "../../components/Loader";

const LoadableVehicles = Loadable({
  loader: () => import(`../../components/Vehicles`),
  loading: Loader,
  delay: 300
});

const LoadableVehicle = Loadable({
  loader: () => import(`../../components/DynamicPage`),
  loading: Loader,
  delay: 300
});

export const getRoutes = () => [
  {
    path: "/vehicles",
    component: LoadableVehicles
  },
  {
    path: "/vehicles/:year",
    component: LoadableVehicle,
    exact: true
  }
];
