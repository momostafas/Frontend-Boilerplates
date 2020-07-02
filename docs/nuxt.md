---
id: nuxt
title: Nuxt + TypeScript + SASS
---
<h2 align="center">Nuxt - Boilerplate Features <img src="https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt.png" align="left" width="35" title="Boilerplate" /></h2>

<p align="center">
  <a href="https://travis-ci.org/CKGrafico/Frontend-Boilerplates"><img src="https://travis-ci.org/CKGrafico/Frontend-Boilerplates.svg?branch=basic" alt="Build Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/releases"><img src="https://img.shields.io/badge/Update%20status-Rarely-orange" alt="Update Status" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/blob/basic/LICENSE"><img src="https://img.shields.io/github/license/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub license" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/network"><img src="https://img.shields.io/github/forks/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub forks" /></a>
  <a href="https://github.com/CKGrafico/Frontend-Boilerplates/issues"><img src="https://img.shields.io/github/issues/CKGrafico/Frontend-Boilerplates.svg" alt="GitHub issues" /></a>
</p>

Most relevant technologies used in the Boilerplate:

- **Vue:** The progressive JavaScript framework.
- **Nuxt:** Universal Vue.js Applications.
- **TypeScript:** All the code uses TypeScript.
- **Express:** Backend ready project.
- **SASS:** Scss structure with good practises.
- **Linting:** Linting for JavaScript and SASS.
- **BEM (Non strict) + BEMIT:** Some conventions for CSS classes.

### 📚 Setup and scripts

> Before start [download](https://github.com/CKGrafico/Frontend-Boilerplates/archive/nuxt.zip) or clone the boilerplate.
> **Install** all the dependencies.

```shell
$ npm install
```

**Run** the project for local development.

```shell
$ npm start
```

**Build** the project for a production environment.

```shell
$ npm run build
```

If you want to **test**, there are some options.

```shell
$ npm test # (Will run unit and e2e tests)
$ npm run test:unit # (Only unit tests)
$ npm run test:e2e # (Only e2e tests)
```

The **linting** is configured with [**husky**](https://github.com/typicode/husky) and will run before push, but you can run it.

```shell
$ npm run lint # (Will run scripts and styles linting)
$ npm run lint:scripts # (Only scripts lint)
$ npm run lint:styles # (Only styles lint)
```
