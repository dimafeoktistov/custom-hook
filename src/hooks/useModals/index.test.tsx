import * as React from "react";
import renderer from "react-test-renderer";
import Modal from "../../components/Modal";

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe("Modal renders without mistakes", () => {
  it("matches snapshot", () => {
    const testProps = {
      id: "123",
      content: "123",
      cb: () => jest.fn(),
    };

    const tree = renderer.create(<Modal {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
