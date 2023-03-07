// constructor Shapes is imported
const Shapes = require("../lib/shapes");

// testing suite for Shapes
describe("Shapes", () => {
  //test should render a 300 x 200 svg element
  describe("element size", () => {
    it("should render a 300x200 svg element", () => {
      const createdSVG = '<svg width="300" height="200"></svg>';
      const shape = new Shape();
      shape.setSize(<svg width="300" height="200"></svg>);
      expect(shape.render()).toEqual(createdSVG);
    });
  });

  //test should append text element

  //test should set text message and color

  //test should throw if text exceeds 3 characters
  //https://jestjs.io/docs/using-matchers#exceptions

  //test should include a shape
});
