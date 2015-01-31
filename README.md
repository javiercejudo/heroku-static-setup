# Heroku static setup

This repository has the basic setup for dploying a static site to heroku.

## Usage

Your static site should be on a subdirectory `public/` in the same directory
as the files in `src/`.

## Contents

- `package.json`: defines the NPM dependencies.
- `index.js`: defines the app, the path to your static site (`public/` by default) and the port (5000 by default)
- `Procfile`: tells Heroku how to start the server.