// Dependencies
const inquirer = require("inquirer");
const fs = require("fs"); //part of node installations; use to writeFile

const generateSVG = ({}) => ``;

inquirer
  .prompt([
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
      choices: [{ title: "blue", value: "#0000ff" }],
    },
  ])
  .then((answers) => {
    const svgContent = generateSVG(answers);

    fs.writeFile("logo.svg", svgContent, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
