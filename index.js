// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateRM = require("./generateMarkdown");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "email",
        message : "email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    returnfs.writeFile(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Wait one moment")
        writeToFile("README.md", generateMarkdown ({ ...inquirerAnswers}));
    })
}

// Function call to initialize app
init();
