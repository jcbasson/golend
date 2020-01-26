import React from "react";
import { getSrcSet } from "./utils";
const GolendLogo = () => {
  const GolendLogoSrcSmall = getSrcSet({ width: 200, additional: ["f_auto"] });
  const GolendLogoSrcLarge = getSrcSet({ width: 256, additional: ["f_auto"] });

  return (
    <img
      srcSet={`${GolendLogoSrcSmall},
            ${GolendLogoSrcLarge}`}
      sizes="(max-width: 425px) 200px, 256px"
      alt="Golend"
    />
  );
};

export default GolendLogo;
