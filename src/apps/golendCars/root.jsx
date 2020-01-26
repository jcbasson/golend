import React from "react";
import { getRoutes } from "./routeConfig";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "../../components/routes/switchRoutes";
import LayoutHeaderMain from "../../components/layouts/layoutHeaderMain";
import GolendTheme from "../../components/themes/golend";
import UserProfilePic from "../../components/userProfile/userProfilePic";
//TODO: Move this all to a state or config
const routes = getRoutes();
const lowQualityProfilePicSrc =
  "https://res.cloudinary.com/jccloudinary/image/upload/w_20/e_blur:1000,q_1,f_auto/e_grayscale/v1580036468/golend/user-profile-pic_uv2ugw.jpg";
const highQualityProfilePicSrc =
  "https://res.cloudinary.com/jccloudinary/image/upload/v1580036468/golend/user-profile-pic_uv2ugw.jpg";

const Root = () => (
  <Router>
    <GolendTheme>
      <LayoutHeaderMain>
        <UserProfilePic
          lowQualityImgSrc={lowQualityProfilePicSrc}
          highQualityImgSrc={highQualityProfilePicSrc}
        ></UserProfilePic>
        <SwitchRoutes routes={routes} />
      </LayoutHeaderMain>
    </GolendTheme>
  </Router>
);

export default Root;
