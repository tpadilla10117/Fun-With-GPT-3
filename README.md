# App Description

- An application that uses the GPT-3 AI model created by OpenAI {https://openai.com/api/}.  The model can process plain text prompts and produce outputs not dissimilar to human writing.

- In this application, users can type in a prompt (e.g. Write a poem about Dinosaurs, I think cats are cute, etc.) in a form input field.  Once a prompt is submitted via the 'Submit' button on the graphical interface, the GPT-3 will be reached via the text-curie-001 API and will respond with an interpretted output.

## Table of Contents:
* [Deployment](#Deployment)
* [Usage Instructions](#usage-instructions)
* [Cloning Instructions](#cloning-instructions)
* [Tech Stack](#tech-stack)
* [Dependencies](#dependencies)
* [Limitations](#limitations--ideas-for-improvement)
* [TroubleShooting](#troubleshooting--bugs)
* [Scripts](#getting-started-with-create-react-app)

## Deployment:

- Via Vercel @ {}

## Usage Instructions:
- 1) Navigate to the deployed URL at: 

- 2) Click on the form input field, colored white and immediately after the Page's main title, 'Fun with A.I.'

- 3) Type in a prompt.  E.g. "Why are cat's so funny?" 

- 4) Once a prompt has been typed out, click the large blue 'Submit' button

- 5) Enjoy a response returned by the GPT-3 AI model in the feed at the bottom of the page!


## Cloning Instructions:

- 1) In the terminal for the project, `npm i dotenv` to install .env.
    1a) Create a .env file
    1b) `npm i node-modules` In the terminal

- 2) Create a free account and receive an API Key from  OpenAI:

    2a) Go to https://beta.openai.com/signup
    2b) Enter your email address and password
    2c) Verify your email address
    2d) Verify your phone number by entering the code that is sent to you via SMS
    2e) Once logged in, go to https://beta.openai.com/account/api-keys to get your secret API key

- 3) Save your secret API Key in your .env file -> ***be sure to add your .env to a .gitignore file to avoid commiting the key publically to a repo!***

- NOTES:

    - Once you have your secret API key you can send requests from your application. Please note that you have $18.00 of free credits - consider using a less expensive model such as “text-curie-001” to ensure that you don’t exceed the limit.

    - Important: You should never expose API keys on the client side in production code because anyone on the internet will have access to your secret key and can make requests with your account. It is however acceptable for the purpose of this application and testing since it won’t be widely available and we don’t expect you to have a backend server.

    - You should consider using environment variables or a key manager to avoid committing your secret API key to your git repository. Check the documentation for your hosting provider for how to do this.


## Tech Stack:

- Node.js, JS, React.js, HTML, SCSS
- NASA APOD API { https://github.com/nasa/apod-api }

## Dependencies:

### `npm install axios` {https://www.npmjs.com/package/axios} 
    - Promise based HTTP client for the browser and node.js

### `npm i dotenv` => To load environment variables from `.env` file to `process.env` object

### `npm i node-sass` => CSS pre-processor

Reference: https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/

- react, react-dom, react-scripts, sass, node-sass, cors

## Limitations & Ideas For Improvement:

- As of 05/12/22:

    - Reset the form field once a user clicks the 'Submit' button
    - App is MOSTLY responsive; should make fully responsive
    - Let the user choose the AI engine from a select box
    - Add some presets for the user to quickly send a good prompt
    - Make the app more specific to a single purpose. See the OpenAI Examples and prompt design docs for inspiration.


## TroubleShooting & Bugs:
    - **NOTE: UI form field doesn't clear upon submitting a prompt
    - **NOTE: 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

