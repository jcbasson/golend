import React from "react";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "../../components/routes/switchRoutes";
import LayoutHeaderMain from "../../components/ui/layouts/layoutHeaderMain";
import GolendTheme from "../../components/themes/golend";
import UserProfilePic from "../../components/userProfile/components/userProfilePic";

const Root = () => (
  <Router>
    <GolendTheme>
      <LayoutHeaderMain>
        <UserProfilePic></UserProfilePic>
        <SwitchRoutes routes={getRoutes()} />
      </LayoutHeaderMain>
    </GolendTheme>
  </Router>
);

export default Root;
