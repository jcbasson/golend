import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";

const GolendCarsApp = ({ routes = [] }) => {
  return (
    <Router>
      <div>
        <Switch>
          {!isEmpty(routes) &&
            routes.map(({ path, component, exact }) => {
              return (
                <Route
                  key={path}
                  exact={isNil(exact) ? false : exact}
                  path={path}
                  component={component}
                />
              );
            })}
        </Switch>
      </div>
    </Router>
  );
};

export default GolendCarsApp;
