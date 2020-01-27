import React from "react";
import styled from "styled-components";

const VehicleInfo = ({ year, model, series, variant, children }) => {
  return (
    <VehicleInfoContainer>
      <VehicleFullModelDetails>
        {year} {model} {series}
      </VehicleFullModelDetails>
      <VehicleDescription>{variant}</VehicleDescription>
      <VehicleContentPlaceholder>{children}</VehicleContentPlaceholder>
    </VehicleInfoContainer>
  );
};

const VehicleInfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 400px;
  flex-direction: column;
  align-item: center;
`;

const VehicleFullModelDetails = styled.span`
  font-weight: 1000;
  font-size: 14px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const VehicleDescription = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

const VehicleContentPlaceholder = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default VehicleInfo;
