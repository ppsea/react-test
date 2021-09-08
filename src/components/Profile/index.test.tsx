import React from "react";
import { act, render } from "@testing-library/react";
import Profile from "./index";

describe("<Profile/>", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile userName="henry" name="Sung Nam Kim" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile userName="henry" name="Sung Nam Kim" />);
    utils.getByText("henry");
    utils.getByText("Sung Nam Kim");
    utils.getByText(/Kim/);
  });
});
