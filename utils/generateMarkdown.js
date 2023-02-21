// function to generate markdown for README
function generateMarkdown(data) {
  let license;
  if (data.license === "MIT") {
    data.license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    license = "MIT";
  } else if (data.license === "ISC") {
    data.license =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    license = "ISC";
  } else if (data.license === "BSD") {
    data.license =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    license = "BSD";
  } else if (data.license === "Apache-2.0") {
    data.license =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    license = "Apache-2.0";
  }

  return `
# ${data.title}
${data.license}
## Description
${data.description}
## Table of Contents

**[Installation](#Installation)**<br>

**[Usage](#Usage)**<br>

**[License](#License)**<br>

**[Contributing](#Contributing)**<br>

**[Tests](#Tests)**<br>

**[Questions](#Questions)**<br>

## Installation
To install necessary dependencies run the following command:

${"``` "} 
${data.installation} 
${" ```"}

## Usage
${data.usage}

## License
This project is licensed under the ${license} license.

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:

${"``` "} 
${data.tests} 
${" ```"}

## Questions
If you have any questions about this project, open an issue or contact me directly at 
${
  data.email
}. If you want to take a look at more of my work click on the following link:
https://github.com/${
    data.username
  }. Thank you for your time and I hope you enjoyed.


`;
}

module.exports = generateMarkdown;
