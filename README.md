# Oven to Air Fryer Converter

A small react project to convert oven cooking instructions into instructions suitable to use with an air fryer.
I've added unit tests and a screenshot test so that it's easier to update and maintain this little project in the future.

Link: https://normansophie789.github.io/oven-airfryer-converter/

## Statuses

[![CodeQL](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/github-code-scanning/codeql)

[![Github pages deployment](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/deploy.yml/badge.svg)](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/deploy.yml)

[![Node.js CI](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/node.js.yml/badge.svg)](https://github.com/normansophie789/oven-airfryer-converter/actions/workflows/node.js.yml)

## Features

- Change units (Fahrenheit and Celsius)
- Change oven type (convection/fan assisted oven and conventional oven)
- Responsive

## Commands

- Run locally: `npm run dev`
- Unit tests: `npm run test:unit`
- Screenshot test(s): `npm run test:screenshot`
- Linting: `npm run lint`
- Locally deploying to Github Pages: `npm run deploy`
- Build and watch: `npm run build:watch`
- Preview build: `npm run preview`

## Github actions

When you raise a PR, there are a few Github actions that will run. The first of these is the Node.js CI - this runs the linter and some tests to validate changes being made before you can merge to master.

On pushes to master, a Github Action will run that will create a Github Pages deployment.