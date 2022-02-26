const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },
    {
        type: 'input',
        name: 'Description',
        message: ' enter a description of your project'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What did you use for installation'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your application used for'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators'
    },
    {
        type: 'list',
        name: 'License',
        message: 'add your license',
        choices: ['MIT', 'Apache_2.0', 'proxy', 'none']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Explain guidelines for contributing to this project, if any'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write out tests for your application'
    },
]).then(ans => {
    fs.writeFileSync('./dist/README.md', 
`# ${ans.title}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${ans.Description}

## Usage 

${ans.Usage}


## Credits

${ans.Credits}




## License

${ans.License}



## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Contributing

${ans.Contributing}

## Tests

${ans.Tests}
    `)
})