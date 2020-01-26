import React from "react";
import { render } from "@testing-library/react";
import Layout2Piece from "../layout2piece";
import MockTheme from "../../themes/mockTheme";

describe("components/layouts/layout2piece", () => {
  it("should display a header", () => {
    const { container } = render(
      <MockTheme>
        <Layout2Piece />
      </MockTheme>
    );
    const header = container.querySelector("header");
    expect(header).toBeTruthy();
  });
});
