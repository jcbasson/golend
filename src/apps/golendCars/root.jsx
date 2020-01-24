import React from "react";
import GolendCarsApp from "../../components/apps/golendCarsApp";
import GolendCarsRoutes from "../../components/routes/golendCarRoutes";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
const props = {
  routes: getRoutes()
};

const Root = () => (
  <GolendCarsApp>
    <Router>
      <GolendCarsRoutes {...props} />
    </Router>
  </GolendCarsApp>
);

export default Root;
