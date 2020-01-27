import React from "react";
import styled from "styled-components";

const Vehicle = ({ children }) => {
  return <VehicleContainer>{children}</VehicleContainer>;
};

const VehicleContainer = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  align-items: center;
  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export default Vehicle;
