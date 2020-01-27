import React from "react";
import styled from "styled-components";
import { formatToDollarCurrency } from "./utils";

const VehiclePricing = ({ newPrice, from }) => {
  const formattedNewPrice = formatToDollarCurrency(newPrice);
  const formattedFromPrice = formatToDollarCurrency(from);

  return (
    <VehiclePricingContainer>
      <TotalPriceDisplay>
        NEW <PriceText>{formattedNewPrice}</PriceText> RRP*
      </TotalPriceDisplay>
      <MonthlyRateDisplay>
        From <PriceText>{formattedFromPrice}</PriceText> per month*
      </MonthlyRateDisplay>
    </VehiclePricingContainer>
  );
};

const VehiclePricingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const TotalPriceDisplay = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  @media (max-width: 840px) {
    display: grid;
  }
`;

const MonthlyRateDisplay = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  @media (max-width: 840px) {
    display: grid;
  }
`;
const PriceText = styled.strong`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

const Asterisk = styled.span``;

export default VehiclePricing;
