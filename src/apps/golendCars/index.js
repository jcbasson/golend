import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import { ThemeProvider } from "styled-components";
import GolendTheme from "../../themes/golend";

import "./reset.css";

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider theme={GolendTheme}>
        <Component />
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("root")
  );

const hotModuleCallbackFn = props => () => render(Root);

render(Root);
if (module.hot)
  module.hot.accept(
    "../../components/apps/golendCarsApp",
    hotModuleCallbackFn(props)
  );
