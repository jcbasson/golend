import React from "react";
import { render } from "@testing-library/react";
import SwitchRoutes from "../switchRoutes";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("components/routes/SwitchRoutes", () => {
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
        <SwitchRoutes {...props} />
      </Router>
    );

    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch("You are on a vehicles page");
  });
});
