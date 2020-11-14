import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App renders without mistakes", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
