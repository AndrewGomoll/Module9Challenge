// TODO: Include packages needed for this application
//fs allows file systems to be manipulated
const fs = require("fs");

//allows user input to be recieved
const inquirer = require("inquirer");

//repuires that a generateMarkdown file is present
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter title: ",
    },
    {
        type: "input",
        name: "description",
        message: "Enter Description: ",
    },

    {
        type: "input",
        name: "installation",
        message: "Enter installation requirements: ",
    },

    {
        type: "input",
        name: "usage",
        message: "Enter usage: ",
    },

    {
        type: "list",
        name: "license",
        message: "Select one of the licenses for this project: ",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },
 
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution: ",
    },

    {
        type: "input",
        name: "test",
        message: "Enter test instructions: ",
    },
 
    {
        type: "input",
        name: "userName",
        message: "Enter Github username: ",
    },

    {
        type: "input",
        name: "userEmail",
        message: "Enter email: ",
        //validate section ensures that corrent syntax is used in the email
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Enter email with corrent syntax";
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)
{
    fs.writeFile(fileName, generateMarkdown(data), function (err)
    {
        if (err)
        {
        return console.log(err);
        }
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("./README.md", data);
    });
}

// Function call to initialize app
init();