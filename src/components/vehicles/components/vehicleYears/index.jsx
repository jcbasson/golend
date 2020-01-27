import React from "react";
import styled from "styled-components";
import { generateYearList } from "../../../../utils/dateTimeUtils";
import { Link } from "react-router-dom";
import SectionTitle from "../../../titles/sectionTitle";

const VehicleYears = ({
  startYear,
  numberOfYearsCountBack,
  lastButtonText,
  sectionTitle
}) => {
  const years = generateYearList(startYear, numberOfYearsCountBack);

  return (
    <>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <VehicleYearsSelector>
        {years.map(year => {
          return (
            <YearLink key={year} to={`vehicles/${year}`}>
              {year}
            </YearLink>
          );
        })}
        <YearLink to={`/vehicles`}>{lastButtonText}</YearLink>
      </VehicleYearsSelector>
    </>
  );
};

const VehicleYearsSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;
`;

const YearLink = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  :link,:hover, :active: {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
  }
  border-radius: 2px;
  line-height: 45px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;

export default VehicleYears;
