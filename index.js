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

const generateReadMe = (answers) => {
 `#${answers.name}`;
switch (answers.license) {
    case 'MIT license': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    break;
    case 'GNU AGPLv3': `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    break;    
    case 'GNU GPLv3': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    break;    
    case 'GNU LGPLv3': `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    break;
    case 'Mozilla Public License 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    break;
    case 'Apache License 2.0': `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    break;
    case 'Boost Software License': `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    break;  
    case 'Unlicense License': `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    break;       
    default: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    break;
};
 `<a name="description'></a>${answers.description}`;
 if(answers.contents = 'yes'){
     `# Table of Contents
     ## 1. [Description](#description)
     ## 2. [Installation](#installation)
     ## 3. [Usage](#usage)
     ## 4. [License](#license)
     ## 5. [Contributors](#contributors)
     ## 6. [Tests](#tests)
     ## 7. [Questions](#questions)`
 };
 if(answers.installationq = 'yes'){
     `# Installation Instructions <a name="installation'></a>
     ${answers.installation}`
 };
 `# Usage Guidelines <a name="usage"></a>
 ${answers.usage}
 
 # License for Application <a name="license"></a>
 ${answers.license}
 If you click the badge below it will take you to the license details.`;
 switch (answers.license) {
    case 'MIT license': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    break;
    case 'GNU AGPLv3': `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    break;    
    case 'GNU GPLv3': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    break;    
    case 'GNU LGPLv3': `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    break;
    case 'Mozilla Public License 2.0': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    break;
    case 'Apache License 2.0': `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    break;
    case 'Boost Software License': `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    break;  
    case 'Unlicense License': `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    break;       
    default: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    break;
};
if(answers.contributorsq = 'yes'){
    `# Contributors <a name="contributors"></a>
    ${answers.contributors}`
};
if(answers.testq = 'yes'){
    `# Tests for this Application <a name"tests'></a>
    ${answers.test}`
};
`# Questions, Comments or Concerns <a name="questions"></a>
## Please direct to my GitHub or Email
${answers.github}
${answers.email}

Thank you for checking out my application!`;
}
// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then((answers) => console.log(answers))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
