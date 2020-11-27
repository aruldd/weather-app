# The Weather App

---

[![Build Status](https://travis-ci.com/aruldd/weather-app.svg?token=53RcDr32FzEWgwNppq4x&branch=master)](https://travis-ci.com/aruldd/weather-app) [![Coverage Status](https://coveralls.io/repos/github/aruldd/weather-app/badge.svg?branch=master)](https://coveralls.io/github/aruldd/weather-app?branch=master)

A simple weather app using OpenWeather API

## Demo

Find the online demo [here](https://www.weather.arul.one/).

## Scripts

| **Script** | **Description**                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| start      | Runs tests, lints, starts dev webserver, and opens the app in your default browser.                   |
| test       | Runs tests (files ending in .spec.js or .test.js) using Jest and outputs results to the command line. |
| build      | Bundles all JavaScript using webpack and writes it to /dist.                                          |

## Tech Stack

### Frontend

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org)
- [React Router](https://github.com/reactjs/react-router)
- [BluePrintJS](https://blueprintjs.com/)

### Developement

- [Babel](http://babeljs.io)
- [Webpack](https://webpack.js.org)
- [SASS](http://sass-lang.com/)

### Linting and Testing

- [Jest](https://facebook.github.io/jest/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [ESLint](http://eslint.org/)

### CI/CD

- [AWS Amplify](https://aws.amazon.com/amplify/)

## Further Improvements

- Leverage browser Geolocation API for getting current location
- Ablity to save and switch between locations
- Auto refresh and auto update location
- Beautify and improve the UI/UX with graphs/icons
- Dashboard for current data
