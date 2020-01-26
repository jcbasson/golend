import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";

import "./reset.css";

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

const hotModuleCallbackFn = props => () => render(Root);

render(Root);
if (module.hot) module.hot.accept("./root", hotModuleCallbackFn(props));
