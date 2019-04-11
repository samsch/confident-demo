# Connect Four demo

Alternating regular gameplay demo.

## Running this project

You need a current version of Node.js installed (currently testing and building with Node v10.8.0 and npm v6.2.0, but latest LTS should be fine).

Clone the project, and run `npm i` (shorthand for `npm install`) to install the dependencies. (This project does not include the package-lock.json, to encourage using the latest versions. Please file an issue if a dependency is out of date.)

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

Run tests with `npm test`. Run tests in watch mode with `npm test -- --watch`.

## Make it your own

`src/index.js` and `src/App.js` contain a basic example app. Replace these with your own app.
