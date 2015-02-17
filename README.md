# Heroku static setup

This repository has the basic setup for deploying static sites to
[Heroku][heroku-home] using [Dropbox][dropbox-home].

See demo at https://github.com/javiercejudo/heroku-static-setup-demo.

## Basic usage

Requirements:

- Your static site.
- A [Heroku][heroku-home] account.
- A [Dropbox][dropbox-home] account with the app installed on your system.

To deploy your static site:

- Login to Heroku and create a new app.
- Connect the app to Dropbox. This will create a new folder under `Dropbox/Apps/Heroku/` with the name of your app. [Learn more.][heroku-dropbox-sync]
- Copy your static site inside a folder named `public/` into the app's folder.
- Download the latest version of the [heroku-static-setup][heroku-static-setup-releases] and extract the files into the app's folder. At this point, you should have the following:

```
Dropbox/
`-- Apps/
    `-- Heroku/
        `-- app-name/
            |-- public/
            |   |-- [Your static files]
            |   `-- ...
            |-- package.json
            |-- index.js
            `-- Procfile
```

- Wait until Dropbox has synchronised all the files and deploy from the Heroku interface.
- When the build is finished, you should be able to see your site at `https://[app-name].herokuapp.com`.

## Features

- Simple workflow without Git, the Heroku Toolbet or even the command line.
- [Gzip compression][gzip-google] out of the box.

## Contents

- `package.json`: defines the NPM dependencies.
- `index.js`: defines the app, the path to your static site (`public/` by default) and the port (5000 by default).
- `Procfile`: tells Heroku how to start the server.

## Local testing

- Install [Node.js][nodejs-home].
- Run `npm install` from the `app-name/` folder where the `package.json` lives.
- Run `npm start` and visit http://localhost:5000

To start the app on a different port, run `PORT=[your port] npm start`.

[heroku-home]: https://www.heroku.com/
[dropbox-home]: https://www.dropbox.com/
[heroku-dropbox-sync]: https://devcenter.heroku.com/articles/dropbox-sync
[heroku-static-setup-releases]: https://github.com/javiercejudo/heroku-static-setup/releases
[gzip-google]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer
[nodejs-home]: https://nodejs.org/
