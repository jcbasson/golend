import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "../Loader";

const LoadableHome = Loadable({
  loader: () => import("../Home"),
  loading: Loader,
  delay: 300
});

const LoadableDynamicPage = Loadable({
  loader: () => import("../DynamicPage"),
  loading: Loader,
  delay: 300
});

const GolendCarsApp = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoadableHome} />
          <Route exact path="/dynamic" component={LoadableDynamicPage} />
          {/* <Route component={AsyncNoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default GolendCarsApp;
