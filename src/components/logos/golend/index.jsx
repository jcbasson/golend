import React from "react";
import styled from "styled-components";
import { getSrcSet } from "./utils";

const GolendLogo = () => {
  const GolendLogoSrcSmall = getSrcSet({
    width: 80,
    additional: ["f_auto", "c_scale"]
  });
  const GolendLogoSrcLarge = getSrcSet({
    width: 160,
    additional: ["f_auto", "c_scale"]
  });

  return (
    <LogoImg
      srcSet={`${GolendLogoSrcSmall},
            ${GolendLogoSrcLarge}`}
      sizes="(max-width: 425px) 90px, 180px"
      alt="Golend"
    />
  );
};

const LogoImg = styled.img`
  height: 38px;
  @media (max-width: 425px) {
    height: 19px;
  }
`;

export default GolendLogo;
