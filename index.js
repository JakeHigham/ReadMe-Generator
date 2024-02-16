const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'None', 'Other'],
        default: ["None"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Selection required');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
       default: ['N/A']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        default: ['N/A']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any credits you would like to include?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email you would like to use?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        default: 'N/A'
    },
];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log(`${fileName} generated successfully!`)
    );
}

// Function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the init function to start the application
init();