import get from "lodash/get";

export const generateSrcSets = (
  cdnConfigSettings,
  smallImgWidth,
  largeImgWidth
) => {
  const cdnRootPath = get(cdnConfigSettings, "rootPath");
  const logoPath = get(cdnConfigSettings, "logoPath");

  return {
    smallLogoSrc: `${cdnRootPath}/f_auto,c_scale,w_${smallImgWidth}/${logoPath} ${smallImgWidth}w`,
    largeLogoSrc: `${cdnRootPath}/f_auto,c_scale,w_${largeImgWidth}/${logoPath} ${largeImgWidth}w`
  };
};
