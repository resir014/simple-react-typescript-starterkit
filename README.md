# simple-react-typescript-starterkit

> Simple, ready-to-use React development environment with TypeScript, SASS, CSS Modules, and Webpack.

This is a React starter kit that fits well to those who are just geting started on developing React apps with TypeScript, with the basics provided out-of-the-box so you can simply hack away.

It's based off of [simple-react-starterkit](https://github.com/South-Paw/simple-react-starterkit), repurposed for developing React Apps with TypeScript, SASS, and CSS Modules.

## Contents

The starter kit contains the following:

* [Webpack](https://webpack.js.org/) - A web assets bundler for the modern age.
* [TypeScript](http://typescriptlang.org) - Statically typed superset of JavaScript created by Microsoft.
* [SASS](http://sass-lang.com/) + [CSS Modules](https://github.com/css-modules/css-modules) - CSS designed for styling component-based interfaces, on top of the SASS preprocessor.

Note that this repository contains a `yarn.lock` file, used by the [Yarn](https://yarnpkg.com/en/) package manager - **this is optional**. Yarn has some advantages over `npm`, particularly in install speed and caching, but if you're unsure, `npm` works just as fine.

## Getting started

### Requirements

* [Node.js](https://nodejs.org/) (v6.0.0+)
* [Yarn](https://yarnpkg.com/en/) (v1.0.0+) - Again, this is optional.

### Setup

We'll assume you've downloaded/cloned the repo. First, we'll install all the required modules

```bash
# Install all dependencies
$ yarn

# ...or, for npm
$ npm install
```

### Developing locally

To work on your React app locally, you can start a development server.

```bash
$ npm start
```

### Building

```bash
# Compiles all assets and outputs them into the `dist/` folder
$ npm run build
```

### Testing

*Coming soon!*

## Commands

* `npm start` - starts a local development server on `localhost:8080`.
* `npm run build` - compiles a production-ready build to the `dist/` folder which can be used in your project.

## Special thanks

[Alex Gabites (South-Paw)](https://github.com/South-Paw) - for the original [`simple-react-starterkit`](https://github.com/South-Paw/simple-react-starterkit).
