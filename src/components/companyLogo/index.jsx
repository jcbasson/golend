import React from "react";
import styled from "styled-components";
import memoize from "lodash/memoize";
import { generateSrcSets } from "./utils";
import config from "./config.json";

const CompanyLogo = () => {
  const makeGenerateSrcSets = memoize(generateSrcSets);
  const { smallLogoSrc, largeLogoSrc } = makeGenerateSrcSets(config, 80, 160);

  return (
    <LogoImg
      srcSet={`${smallLogoSrc},
            ${largeLogoSrc}`}
      sizes="(max-width: 425px) 90px, 180px"
      alt="Logo"
    />
  );
};

const LogoImg = styled.img`
  height: 38px;
  @media (max-width: 425px) {
    height: 19px;
  }
`;

export default CompanyLogo;
