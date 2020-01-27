import React from "react";
import styled from "styled-components";
import TelephoneIcon from "../icons/telephoneIcon";

const CallUsButton = ({ telephoneNumber, companyName }) => {
  return (
    <CallUsButtonContainer>
      <TelephoneIcon></TelephoneIcon>
      <CallUsText>
        {telephoneNumber} {companyName}
      </CallUsText>
    </CallUsButtonContainer>
  );
};

const CallUsButtonContainer = styled.div`
  height: 41px;
  display: flex;
  cursor: pointer;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0 15px 2px 10px;
  cursor: pointer;
  @media (max-width: 425px) {
    height: 29px;
    padding: 0px 10px;
  }
`;

const CallUsText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  line-height: 38px;
  font-weight: bold;
  font-size: 12px;
  @media (max-width: 425px) {
    display: none;
  }
`;

export default CallUsButton;
