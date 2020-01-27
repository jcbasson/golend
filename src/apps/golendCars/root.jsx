import React from "react";
import { getRoutes } from "./configs/routeConfig";
import userProfileConfig from "./configs/userProfile.json";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "../../components/routes/switchRoutes";
import LayoutHeaderMain from "../../components/layouts/layoutHeaderMain";
import GolendTheme from "../../components/themes/golend";
import UserProfilePic from "../../components/userProfile/components/userProfilePic";

//TODO: Move these props to state and UserProfilePic component would fetch the user data from the server
const Root = () => (
  <Router>
    <GolendTheme>
      <LayoutHeaderMain>
        <UserProfilePic {...userProfileConfig}></UserProfilePic>
        <SwitchRoutes routes={getRoutes()} />
      </LayoutHeaderMain>
    </GolendTheme>
  </Router>
);

export default Root;
