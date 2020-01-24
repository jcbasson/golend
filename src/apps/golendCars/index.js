import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import GolendCarsApp from "../../components/apps/golendCarsApp";

import "./index.css";

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

render(GolendCarsApp);
if (module.hot)
  module.hot.accept("../../components/apps/golendCarsApp", () =>
    render(GolendCarsApp)
  );
