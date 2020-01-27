import React from "react";
import styled from "styled-components";

const VehicleInfo = ({ year, model, series, variant, children }) => {
  return (
    <VehicleInfoContainer>
      <VehicleDescription>
        <VehicleFullModelDetails>
          {year} {model} {series}
        </VehicleFullModelDetails>
        <VehicleVariant>{variant}</VehicleVariant>
      </VehicleDescription>
      {children}
    </VehicleInfoContainer>
  );
};

const VehicleInfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 200px);
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;
  @media (max-width: 425px) {
    display: none;
  }
`;

const VehicleDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const VehicleFullModelDetails = styled.span`
  font-weight: 1000;
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const VehicleVariant = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export default VehicleInfo;
