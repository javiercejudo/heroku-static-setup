# Heroku static setup

This repository has the basic setup for dploying a static site to heroku.

## Usage

For the simplest setup, you will need accounts in [Heroku](https://www.heroku.com/) and [Dropbox](https://www.dropbox.com/). To deploy your
static site, simply follow the instructions below:

- Login to Heroku and create a new app.
- Connect to Dropbox. This will create a new folder under `Dropbox/Apps/heroku/` with the name of your app.
- Copy the files inside `src/` into that new folder.
- Copy your static site inside a folder named `public/` into that same folder.
- Wait until Dropbox has synchronised all the files and deploy from the Heroku interface.
- When the built is finished, you should be able to see your site at https://[your app's name].herokuapp.com/

## Contents

- `package.json`: defines the NPM dependencies.
- `index.js`: defines the app, the path to your static site (`public/` by default) and the port (5000 by default).
- `Procfile`: tells Heroku how to start the server.
