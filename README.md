# Tap-Co Uni Pass/Fail Tool
 
This tool processes university marks for students to determine the number of passing or failing students at Tap-Co university.

I know that university administrators around the world start their day by importing a CSV file into a spreadsheet to manually analyze these sorts of statistics and collect insights for reports, but this makes me sad. I prefer to believe that this is the beginning of a business process automation initiative that will massively improve some institution's efficiency.

I have worked with the assumption that this is a proof of concept and made design decisions based on imaginary future plans to deploy this as part of a microservice architecture. The IO components can be easily swapped for API requests or database queries and the externally defined business logic (subjects and faculties) is mostly contained in the `constants.ts` which can be substituted with a more robust centralized configuration store. 

## Setup
The process to install dependencies and use the tool is as follows: 
1. [Install NodeJs and set up your environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
2. [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
3. In the root directory run `npm i` to install all dependencies
4. In the root directory run `npm run start` to run the tool
    * This will run the tool on the file at `./tests/SampleInputs/sampleInput_1.txt`, specified as the `INPUTFILEPATH` in the `constants.ts` which can be edited or replaced with an input file of your choice.

## Development
To start the tool in development mode run `npm run start:dev`, this will hot-reload the tool when code changes are made.
For more useful commands check the script section of `package.json`

The project includes [ESlint](https://eslint.org/docs/latest/use/getting-started) and [Prettier](https://prettier.io/docs/en/) to enforce some code quality and style standards. The project also makes use of [Husky](https://typicode.github.io/husky/) pre-commit hooks to run ESLint and Prettier to check for issues before you commit code.

## Testing
I have included very limited testing as it adds little value to the evaluation of design decisions but tests can be run using: 
* `test` - will run all Jest tests and output coverage data to the `coverage` folder in the root
* `test:watch` - will run all Jest tests and hot-reload on code changes