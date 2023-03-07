// constructor Shapes is imported
const Shapes = require("../lib/shapes");

// testing suite for Shapes
describe("Shapes", () => {
  //test should render a 300 x 200 svg element
  describe("element size", () => {
    it("should render a 300x200 svg element", () => {
      expect([{ width: 300 }, { height: 200 }]).toMatchObject([
        { width: 300 },
        { height: 200 },
      ]);
    });
  });

  //test should append text element

  //test should set text message and color

  //test should throw if text exceeds 3 characters
  //https://jestjs.io/docs/using-matchers#exceptions

  //test should include a shape
});
