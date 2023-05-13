
// TODO: Create a function to generate markdown for README
function generateMarkdown(userData) {
//Title returns the title and the license the user enters

//Description returns the description of the project

//Table of Contents allows users to sort through areas of the README

//Installation returns installation instructions

//Usage returns how to use the program

//License returns any licenses the program uses

//Contribution returns how other users can contribute to the project

//Test returns how the program can be tested

//Questions returns ways to ask further questions about the program
  return `
## Title
${userData.title}
${userData.license}

## Description
${userData.description}

# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
  
## Installation
${userData.installation}

## Usage
${userData.usage}

## License 
${userData.license}

## Contribution
${userData.contribution}

## Test
${userData.test}

## Questions 
* GitHub Username: ${userData.userName}
* Contact Email: ${userData.userEmail}

`;
}


//need to export the generateMarkdown function 
module.exports = generateMarkdown;