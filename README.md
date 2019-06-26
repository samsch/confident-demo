# Connect Four demo

Alternating regular gameplay demo.

[Live demo](https://samsch.github.io/connect-four-demo/)

## What is this?

This is a demo project I wrote as part of an interview process. The general challenge was to write a playable Connect Four clone, with at reasonable user interface. The time given for the project was a couple hours. All of the application functionality was written in that time allowence. The build and test configuration were pulled from [my boilerplate](https://github.com/samsch/boilerplate-webpack-react/).

With the time constraint, obviously there are some rough edges. The most obvious (to me) is the size and relatively disorganized `src/connectFour.js` file. The accessibilty is questionable at best, designed primarily to pass the minimum bar of being keyboard accessible.

Since completing the functionality of this project, I have made some additions to this readme, as well as setting up gh-pages for a live demo, and one minor formatting fix. Otherwise the code is as it was originally submitted.

## Running this project

You need a current version of Node.js installed (currently testing and building with Node v10.8.0 and npm v6.2.0, but latest LTS should be fine).

Clone the project, and run `npm i` (shorthand for `npm install`) to install the dependencies. (This project does not include the package-lock.json, to encourage using the latest versions. Please file an issue if a dependency is out of date.)

Run the development server with `npm start`. This will open the test page in your browser, and rebuild then refresh the page on source changes.

You can also run the Webpack development build and source watcher with `npm run dev`, which will only recompile. (You might do this to use an external server).

You can make a production build of the bundle with `npm run build`.

Run tests with `npm test`. Run tests in watch mode with `npm test -- --watch`.

## Make it your own

`src/index.js` and `src/App.js` contain a basic example app. Replace these with your own app.
