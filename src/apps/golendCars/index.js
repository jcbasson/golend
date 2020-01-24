import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import GolendCarsApp from "../../components/apps/golendCarsApp";
import { getRoutes } from "./routeConfig";

import "./index.css";

const props = {
  routes: getRoutes()
};

const render = (Component, props) =>
  ReactDOM.render(
    <AppContainer>
      <Component {...props} />
    </AppContainer>,
    document.getElementById("root")
  );

const hotModuleCallbackFn = props => () => render(GolendCarsApp, props);

render(GolendCarsApp, props);
if (module.hot)
  module.hot.accept(
    "../../components/apps/golendCarsApp",
    hotModuleCallbackFn(props)
  );
