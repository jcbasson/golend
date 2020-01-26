import React from "react";
import styled from "styled-components";
import GolendLogo from "../logos/golend";

const GolendNavigation = ({}) => {
  return (
    <NavigationContainer>
      <GolendLogo></GolendLogo>
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

export default GolendNavigation;
