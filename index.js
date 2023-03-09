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
    // console.log(svg);
    return writeFile("./examples/logo.svg", svg.render())
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((err) => console.log("This is an error", err));
  });
