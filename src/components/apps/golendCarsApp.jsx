import React from "react";
import styled from "styled-components";

const GolendCarsApp = ({ children }) => {
  return <GolendCarsAppContainer>{children}</GolendCarsAppContainer>;
};

const GolendCarsAppContainer = styled.div`
  * {
    font-family: ${({ theme }) => theme.fonts.primary} !important;
  }
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
`;

export default GolendCarsApp;
