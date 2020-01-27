import React from "react";
import styled from "styled-components";

const Vehicle = props => {
  console.log(props);
  return <VehicleContainer></VehicleContainer>;
};

const VehicleContainer = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
`;

export default Vehicle;
