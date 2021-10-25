# RENCI Supercomputing Virtual Booth

[![Netlify Status](https://api.netlify.com/api/v1/badges/906f9aeb-3657-4ef6-81af-67e3136e414a/deploy-status)](https://app.netlify.com/sites/renci-supercomputing/deploys)

This is the source code for RENCI's Virtual Booth for the annual Supercomputing Conference. This application is built with [Gatsby](https://gatsbycom/) and deployed on [Netlify](https://www.netlify.com/).

# Development

## 0 Prerequisites
  - [Node.js](https://nodejs.org/) version 10.13.0 (LTS) or higher
  - [npm](https://www.npmjs.com/)

## 1 install dependencies
  - `npm i`

## 2 spin up dev server
  - `npm start` spins up a development server on port 8000.

## Brief Structural Overview

This is a [React](https://reactjs.org/) application built with [Gatsby](https://www.gatsbyjs.org/). It uses a bespoke component library built with [styled-components](https://styled-components.com/). Each view (Earth Data Science, Health Science, etc) is a component in the `./src/pages` directory. Each project is a named export from files within the `./src/projects` directory. Each project has generally the same structure. Each begins with either a logo or the project name, then comes a brief description of the project, lists of available resources (URLs, documents, videos, etc), and the project views end with a contact button. Projects mostly differ in the types of resources listed.

# Production

Netlify will automatically deploy upon changes to the master branch.
