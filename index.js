const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project',
    },
    {
      type: 'list',
      name: 'contents',
      message: 'Do you need a table of contents?',
      choices: ['yes', 'no']
    },
    {
        type: 'list',
        name: 'installationq',
        message: 'Do you need installation instructions?',
        choices: ['yes', 'no']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are your usage recommendations?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to include?',
      choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License', 'Unlicense License']
    },
    {
      type: 'list',
      name: 'contributorsq',
      message: 'Would you like to include contributors?',
      choices: ['yes', 'no']
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are your contributors? Please write the display name in [] and the link in ()',
    },
    {
      type: 'list',
      name: 'testq',
      message: 'Have you written any tests you would like to include?',
      choices: ['yes', 'no']
    },
    {
     type: 'input',
     name: 'test',
     message: 'Please link your tests here..[test name](link)',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
  ]);
};

const generateReadMe = (answers) => { var title = 
    `# ${answers.name}`;
    var topBadge;
        if (answers.license = 'MIT license') {
            topBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
        else if(answers.license = 'GNU AGPLv3'){
                topBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`}
        else if(answers.license = 'GNU GPLv3'){
            topBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
        else if(answers.license = 'GNU LGPLv3'){
            topBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`}
        else if(answers.license = 'Mozilla Public License 2.0'){
            topBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
        else if(answers.license = 'Apache License 2.0'){
            topBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
        else if(answers.license = 'Boost Software License'){
            topBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`}
        else if(answers.license = 'Unlicense License'){
            topBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`};

 var desc = `## ${answers.description}`; 
 var table;
 if(answers.contents = 'yes'){ 
     table =
     `## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Tests](#tests)
7. [Questions](#questions)`
 }
 else ``;
 var install; 
 if(answers.installationq = 'yes'){ install =
     `## Installation Instructions <a name="installation"></a><br> ${answers.installation}`
 }
 else ``; 
 var use =`## Usage Guidelines <a name="usage"></a>
 ${answers.usage}`
 
 var lic =`## License for this Application <a name="license"></a><br>
 If you click the badge below it will take you to the license details.<br>
 ${answers.license}<br>`;
 var midBadge;
    if (answers.license = 'MIT license') {
        midBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
    else if(answers.license = 'GNU AGPLv3'){
            midBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`}
    else if(answers.license = 'GNU GPLv3'){
        midBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}
    else if(answers.license = 'GNU LGPLv3'){
        midBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`}
    else if(answers.license = 'Mozilla Public License 2.0'){
        midBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
    else if(answers.license = 'Apache License 2.0'){
        midBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
    else if(answers.license = 'Boost Software License'){
        midBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`}
    else if(answers.license = 'Unlicense License'){
        midBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`};

var contrib;
if(answers.contributorsq = 'yes'){contrib =
    `## Contributors <a name="contributors"></a><br>
    ${answers.contributors}`
}
else ``;
var test;
if(answers.testq = 'yes'){ test =
    `## Tests for this Application <a name="tests"></a><br>
    ${answers.test}`
}
else ``;
var quest =`## Questions, Comments or Concerns <a name="questions"></a><br>
## Please direct to my GitHub or Email
Git Hub: [${answers.github}](https://www.github.com/${answers.github})<br>
Email: [${answers.email}](${answers.email})<br>

Thank you for checking out my application!`;
var space = `
`;
var readmetext = `${title}${space}${topBadge}${space}${desc}${space}${table}${space}${install}${space}${use}${space}${lic}${space}${midBadge}${space}${contrib}${space}${test}${space}${quest}`;
return readmetext};
// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
