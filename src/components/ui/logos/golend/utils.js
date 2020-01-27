import get from "lodash/get";
import isNil from "lodash/isNil";

const CDN_ROOT = "https://res.cloudinary.com/jccloudinary/image/upload";
const CDN_IMAGE_PATH = "v1580017111/golend/golendLogo_xbjpuo.png";

export const getSrcSet = imgSettings => {
  const imageWidth = get(imgSettings, "width");
  if (isNil(imageWidth)) {
    return "";
  }
  const additional = get(imgSettings, "additional", []);
  const cloudinaryAdditionalSettings = additional.join(",");
  const cloudinaryWidthSetting = `w_${imageWidth}`;

  return `${CDN_ROOT}/${cloudinaryAdditionalSettings},${cloudinaryWidthSetting}/${CDN_IMAGE_PATH} ${imageWidth}w`;
};
