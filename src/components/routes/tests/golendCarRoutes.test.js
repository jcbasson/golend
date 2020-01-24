import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GolendCarRoutes from "../golendCarRoutes";
import { createMemoryHistory } from "history";
import { Link, Route, Router, Switch, MemoryRouter } from "react-router-dom";

describe("components/apps/golendCarRoutes", () => {
  const vehiclesComponent = () => {
    return (
      <>
        <span>You are on a vehicles page</span>
      </>
    );
  };
  const setup = (propOverrides = {}) => {
    const props = {
      routes: [
        {
          path: "/vehicles",
          component: vehiclesComponent
        }
      ],
      ...propOverrides
    };

    return {
      props
    };
  };

  it("it should display vehicles when navigating to vehicles page", () => {
    const { props } = setup();
    const history = createMemoryHistory();
    history.push("/vehicles");
    const { container } = render(
      <Router history={history}>
        <GolendCarRoutes {...props} />
      </Router>
    );

    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch("You are on a vehicles page");
  });
});
