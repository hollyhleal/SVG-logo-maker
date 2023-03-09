// constructor Shapes is imported
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

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

  //test should render a circle
  describe("circle", () => {
    it("should render a circle", () => {
      const newCircle = `<circle cx="150" cy="100" r="80" fill="blue"/>`;
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newCircle);
    });
  });

  //test should render a triangle
  describe("triangle", () => {
    it("should render a triangle", () => {
      const newTriangle = `<polygon points="150,18 244,182 56,182" class="triangle" fill="blue"/>`;
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newTriangle);
    });
  });

  //test should render a square
  describe("square", () => {
    it("should render a square", () => {
      const newSquare = `<rect x="90" y="40" width="120" height="120" fill="blue"/>`;
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(newSquare);
    });
  });
});
