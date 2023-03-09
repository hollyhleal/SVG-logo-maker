// constructor Shapes is imported
const Shapes = require("./shapes");
const SVG = require("./svg");

// testing suite for Shapes
describe("Shapes", () => {
  //test should render a 300 x 200 svg element
  describe("element size", () => {
    it("should render a 300x200 svg element", () => {
      const createdSVG = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> </svg>`;
      const shape = new SVG();
      expect(shape.render()).toEqual(createdSVG);
    });
  });

  //test should append text element
  // describe("append text element", () => {
  //   it("should append text element to svg", () => {
  //     const addText = `<text fill="" font-size="40" text-anchor="middle" font-family="Verdana" x="150" y="125"></text>`;
  //     const newText = new SVG();
  //     expect(newText.render()).toEqual(addText);
  //   });
  // });
  //test should set text message and color

  //test should throw if text exceeds 3 characters
  //https://jestjs.io/docs/using-matchers#exceptions

  //test should include a shape
});
