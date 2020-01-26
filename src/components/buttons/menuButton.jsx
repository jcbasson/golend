import React from "react";
import styled from "styled-components";

const MenuButton = () => {
  return (
    <MenuButtonContainer>
      <MenuLine></MenuLine>
      <MenuLine></MenuLine>
      <MenuLine></MenuLine>
    </MenuButtonContainer>
  );
};

const MenuButtonContainer = styled.div`
  width: 25px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const MenuLine = styled.div`
  height: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export default MenuButton;
