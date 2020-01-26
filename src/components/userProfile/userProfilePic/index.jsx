import React from "react";
import styled from "styled-components";
import { useLQIPImage } from "./hooks";

const UserProfilePic = ({ lowQualityImgSrc, highQualityImgSrc }) => {
  const [src] = useLQIPImage(lowQualityImgSrc, highQualityImgSrc);
  return (
    <UserProfilePicContainer>
      <DividerLines></DividerLines>
      <CircleImg src={src} alt="Profile Pic"></CircleImg>
      <DividerLines></DividerLines>
    </UserProfilePicContainer>
  );
};

const UserProfilePicContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;

const DividerLines = styled.div`
  height: 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 100%;
`;

const CircleImg = styled.img`
  clip-path: circle(43% at 50% 50%);
  width: 120px;
  margin-left: 5px;
  margin-right: 5px;
`;

export default UserProfilePic;
