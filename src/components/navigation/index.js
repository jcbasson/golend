import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GolendLogo from "../logos/golend";
import CallUsButton from "../buttons/callUsButton";
import MenuButton from "../buttons/menuButton";

//TODO: Make telephoneNumber and link "to" come from a config
const GolendNavigation = ({}) => {
  return (
    <NavigationContainer>
      <Link to="/vehicles">
        <GolendLogo></GolendLogo>
      </Link>
      <NavigationButtons>
        <CallUsButton telephoneNumber={1300}></CallUsButton>
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

export default GolendNavigation;
