# App Description

- TBD

## Table of Contents:
* [Deployment](#Deployment)
* [Usage Instructions](#usage-instructions)
* [Cloning Instructions](#cloning-instructions)
* [Tech Stack](#tech-stack)
* [Dependencies](#dependencies)
* [Limitations](#limitations)
* [TroubleShooting](#troubleshooting--bugs)
* [Scripts](#getting-started-with-create-react-app)

## Deployment:

-Via Vercel @ {}

## Usage Instructions:
- 1) 

- 2) You can navigate the datasets with pagination by using the navigation buttons fixed to the screen

- 3) In addition, you can also query by date -> formatted as {date=2014-10-01} to return a single Image (***NOTE: A string value is returned***)


## Cloning Instructions:

- 1) Create .env file, making sure to add an API key from ___ to your .gitignore file (***NEVER SHARE API KEYS!!!***)
- 2) `npm i node-modules`
- 3) `npm i dotenv`
- 4) `npm i node-sass` & `npm i sass`
- 5) `npm install react-fetch-progressbar`

## Tech Stack:

- Node.js, JS, React.js, HTML, SCSS
- NASA APOD API { https://github.com/nasa/apod-api }

## Dependencies:

### `npm install react-fetch-progressbar` {https://www.npmjs.com/package/react-fetch-progressbar} 

### `npm i dotenv` => To load environment variables from `.env` file to `process.env` object

Reference: https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/

- react, react-dom, react-scripts, sass, node-sass, cors

## Limitations:

- As of 05/10/22, 

    - 1) 

## TroubleShooting & Bugs:
    - **NOTE: if query a date, you don't receive a JSON Array, but rather a string
    - **NOTE: count=integer and start_date to end_date return JSON Arrays

    - a) Currently, once a specific card's like button is clicked for the first time, state is maintained upon refresh

    - b) if user makes a new query, the first card to return will have it's like button showing as active; however, if refreshed on this same card, active state is removed.  IF user return's to original card, the state is also gone.  YET a refresh on the original card will return the active state on the like button

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

