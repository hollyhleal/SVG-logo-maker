// Dependencies
const inquirer = require("inquirer");
const fs = require("fs"); //part of node installations; use to writeFile

const generateSVG = ({
    
}) => ``;

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters for your logo.",
      name: "characters",
    },
  ])
  .then((answers) => {
    const svgContent = generateSVG(answers);

    fs.writeFile("", svgContent, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG logo!")
    );
  });
