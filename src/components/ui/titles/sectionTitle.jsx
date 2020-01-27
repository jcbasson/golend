import React from "react";
import styled from "styled-components";

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h1`
  font-size: 18px;
  height: 115px;
  line-height: 100px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: bold;
  @media (min-width: 522px) {
    font-size: 30px;
  }

  @media (max-width: 312px) {
    font-size: 14px;
  }

  @media (max-width: 244px) {
    font-size: 12px;
  }

  @media (max-width: 210px) {
    font-size: 10px;
  }
`;

export default SectionTitle;
