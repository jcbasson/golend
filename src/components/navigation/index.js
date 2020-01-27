import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CompanyLogo from "../companyLogo";
import CallUsButton from "../ui/buttons/callUsButton";
import MenuButton from "../ui/buttons/menuButton";
import config from "./config.json";

const Navigation = () => {
  const { homeRoute, telephoneNumber, companyName } = config;
  return (
    <NavigationContainer>
      <Link to={homeRoute}>
        <CompanyLogo></CompanyLogo>
      </Link>
      <NavigationButtons>
        <CallUsButton
          telephoneNumber={telephoneNumber}
          companyName={companyName}
        ></CallUsButton>
        <MenuButton></MenuButton>
      </NavigationButtons>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationButtons = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  > * {
    margin-right: 10px;
  }
`;

export default Navigation;
