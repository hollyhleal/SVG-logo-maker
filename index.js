// Dependencies
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

// Node promises module
const { writeFile } = require("fs").promises;

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters for your logo.",
      name: "characters",
    },
    {
      type: "input",
      message: "What color would you like your logo text to be?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shapeType",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "What color would you like your logo to be?",
      name: "shapeColor",
    },
  ])
  .then(({ characters, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      case "square":
        shape = new Square();
        break;
    }
    shape.setColor(shapeColor);
    const svg = new SVG();
    // with svg, call setText and setShape method
    svg.setText(characters, textColor);
    svg.setShape(shape);
    console.log(svg);
    return writeFile("./examples/logo.svg", svg.render());
  });

// const generateSVG = ({ characters, textColor, shape, shapeColor }) =>
//   `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shape}<text><tspan fill="${textColor}">${characters}</tspan></text></svg>`;

// const init = () => {
//   promptUser()
//     .then(answers) => writeFile("./examples/logo.svg")
//     .then(() => console.log("Generated logo.svg"))
//     .catch((err) => console.error(err));
// };

// init();
