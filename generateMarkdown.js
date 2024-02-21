const generateMarkdown = data => {
  return `# ${data.title}
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Screenshots](#screenshots)
  * [Contact Me](#contact)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is currently licensed under ${data.license}

  ## Credits 
  ${data.credits}

  ## Contact Me!
  If you have any questions, or ideas about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}



module.exports = generateMarkdown;
