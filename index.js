// Dependencies
const inquirer = require("inquirer");

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
      type: "list",
      message: "What color would you like your logo text to be?",
      name: "textColor",
      choices: ["white"],
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shape",
      choices: ["circle"],
    },
    {
      type: "list",
      message: "What color would you like your logo to be?",
      name: "shapeColor",
      choices: [
        { title: "blue", value: "#0000ff" },
        { title: "red", value: "#FF0000" },
      ],
    },
  ]);
};

const generateSVG = ({ characters, textColor, shape, shapeColor }) => ``;

const init = () => {
  promptUser()
    .then((answers) => writeFile("./examples/logo.svg", generateSVG(answers)))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.error(err));
};

init();
