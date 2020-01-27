import React from "react";
import styled from "styled-components";
import { useLQIPImage } from "../../../../hooks/imageHooks";
import config from "./config.json";

const VehiclePicture = ({ year, name }) => {
  const { cdnUrl, cdnVersion, imageFolderPath, imageFormat } = config;
  const lowQualityVehiclePicSrc = `${cdnUrl}/w_170/e_blur:1000,q_1,f_auto/e_grayscale/${cdnVersion}/${imageFolderPath}/${year}/${name}.${imageFormat}`;
  const highQualityVehiclePicSrc = `${cdnUrl}/w_170/${cdnVersion}/${imageFolderPath}/${year}/${name}.${imageFormat}`;
  const [src] = useLQIPImage(lowQualityVehiclePicSrc, highQualityVehiclePicSrc);

  return (
    <>
      <Image src={src} alt={name}></Image>
    </>
  );
};

const Image = styled.img`
  height: 100%;
  width: 170px;
`;

export default VehiclePicture;
