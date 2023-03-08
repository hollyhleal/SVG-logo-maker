// Dependencies
const inquirer = require("inquirer");
const { Shapes, Circle, Triangle, Square } = require("./lib/shapes");

// Node promises module
const { writeFile } = require("fs").promises;

const promptUser = () => {
  return inquirer.prompt([
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
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "What color would you like your logo to be?",
      name: "shapeColor",
    },
  ]);
  const answers = inquirer.prompt(promptUser);
  let shape = "";
  if (answers.shape === "circle") {
    shape = new Circle();
  } else if (answers.shape === "triangle") {
    shape = new Triangle();
  } else if (answers.shape === "square") {
    shape = new Square();
  }
};

const generateSVG = ({ characters, textColor, shape, shapeColor }) =>
  `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${shape}<text><tspan fill="${textColor}">${characters}</tspan></text></svg>`;

const init = () => {
  promptUser()
    // .then((answers) => {
    //   if (answers.shape === "circle") {
    //     shape = new Circle();
    //   } else if (answers.shape === "triangle") {
    //     shape = new Triangle();
    //   } else if (answers.shape === "square") {
    //     shape = new Square();
    //   }
    // })
    .then((answers) => writeFile("./examples/logo.svg", generateSVG(answers)))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.error(err));
};

init();
