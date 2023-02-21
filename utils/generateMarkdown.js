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

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation
To install necessary dependencies run the following command:

${"``` "} 
${data.installation} 
${" ```"}

## Usage
${data.usage}

## Licence
This project is licensed under the ${license} license

`;
}

module.exports = generateMarkdown;
