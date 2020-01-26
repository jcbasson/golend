import React from "react";
import { render } from "@testing-library/react";
import LayoutHeaderMain from "../layoutHeaderMain";
import MockTheme from "../../themes/mockTheme";

describe("components/layouts/layoutHeaderMain", () => {
  it("should display a header placeholder", () => {
    const { container } = render(
      <MockTheme>
        <LayoutHeaderMain />
      </MockTheme>
    );
    const header = container.querySelector("header");
    expect(header).toBeTruthy();
  });

  it("should display a main content placeholder", () => {
    const { container } = render(
      <MockTheme>
        <LayoutHeaderMain />
      </MockTheme>
    );
    const main = container.querySelector("main");
    expect(main).toBeTruthy();
  });
});
