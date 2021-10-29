# RENCI Supercomputing Virtual Booth

[![Netlify Status](https://api.netlify.com/api/v1/badges/906f9aeb-3657-4ef6-81af-67e3136e414a/deploy-status)](https://app.netlify.com/sites/renci-supercomputing/deploys)

This is the source code for RENCI's Virtual Booth for the annual Supercomputing Conference. This application is built with [Gatsby](https://gatsbycom/) and deployed on [Netlify](https://www.netlify.com/).

# Development

## 0 Prerequisites
  - [Node.js](https://nodejs.org/) version `>=14.15.0`
  - [npm](https://www.npmjs.com/)

## 1 install dependencies
  - `npm i`

## 2 spin up dev server
  - `npm start` spins up a development server on port 8000.

## Brief Structural Overview

This is a [React](https://reactjs.org/) application built with [Gatsby](https://www.gatsbyjs.org/). It uses a bespoke component library built with [styled-components](https://styled-components.com/). Each view (Earth Data Science, Health Science, etc) is a component in the `./src/pages` directory. Each project is a named export from files within the `./src/projects` directory. Each project has generally the same structure. Each begins with either a logo or the project name, then comes a brief description of the project, lists of available resources (URLs, documents, videos, etc), and the project views end with a contact button. Projects mostly differ in the types of resources listed.

## Workflow

Development takes place on the `develop` branch, merging changes into yearly production branches &mdash; `2020`, `2021`, etc. Feature branches should be brached off of and merged into `develop` for testing before merging into a yearly production branch. The ASCII art below attempts to illustrate this.

```
                [2020]                         [2021]
----------o-------o------------------------------o-------->
        /       /                             /
------o------o------o------o------o---------o-------o----->
             \                 /                 [develop]
               o------o------o [feature]
```

# Production

Netlify will automatically deploy upon changes to the `main` branch.
