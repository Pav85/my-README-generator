// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![GitHub License]${data.license}
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
`;
}

module.exports = generateMarkdown;
