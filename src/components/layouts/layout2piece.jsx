import React from "react";
import styled from "styled-components";

const Layout2piece = ({ children }) => {
  return (
    <Layout>
      <LayoutHeaderPlaceholder></LayoutHeaderPlaceholder>
      <LayoutMainContentPlaceHolder>{children}</LayoutMainContentPlaceHolder>
    </Layout>
  );
};

const Layout = styled.div`
  * {
    font-family: ${({ theme }) => theme.fonts.primary} !important;
  }
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutHeaderPlaceholder = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;

const LayoutMainContentPlaceHolder = styled.main`
  width: 81%;
  height: 100%;
  border: 1px solid black;
`;

export default Layout2piece;
