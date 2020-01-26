import React from "react";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "../../components/routes/switchRoutes";
import LayoutHeaderMain from "../../components/layouts/layoutHeaderMain";
import GolendTheme from "../../components/themes/golend";

const props = {
  routes: getRoutes()
};

const Root = () => (
  <Router>
    <GolendTheme>
      <LayoutHeaderMain>
        <SwitchRoutes {...props} />
      </LayoutHeaderMain>
    </GolendTheme>
  </Router>
);

export default Root;
