import React from "react";
import styled from "styled-components";

const Vehicle = ({ children }) => {
  return <VehicleContainer>{children}</VehicleContainer>;
};

const VehicleContainer = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  margin-bottom: 20px;
`;

export default Vehicle;
