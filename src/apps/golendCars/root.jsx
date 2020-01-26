import React from "react";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "../../components/routes/switchRoutes";
import Layout2piece from "../../components/layouts/layout2piece";
import GolendTheme from "../../components/themes/golend";

const props = {
  routes: getRoutes()
};

const Root = () => (
  <GolendTheme>
    <Layout2piece>
      <Router>
        <SwitchRoutes {...props} />
      </Router>
    </Layout2piece>
  </GolendTheme>
);

export default Root;
