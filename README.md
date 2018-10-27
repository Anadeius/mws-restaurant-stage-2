# Mobile Web Specialist: Stage 2 Project
---

## Project Overview: Stage 2 

Stage 2 utilized the modified code of Stage 1, which can be found [here](https://github.com/Anadeius/mws-restaurant-stage-1) as a baseline to work off. With this base app, we introduced an API server to replace the JSON file being used as a database for restaurant information, and implemented the fetch API to retrieve the restaurant data and store it in an IndexedDB database, utilizing Jake Archibald's IndexedDB Promised library to interface with IDB.

## How to install

The application requires NodeJS to function properly.

1. Clone this repo and the data server repo, which can be found in the mws-restaurant-stage-2-data-server repo.

2. Navigate to both folders in your Terminal editor of choice. 

Use the command `node install` to install project dependencies require to build.

The data server can be started with the command 

```node server```

and the application can be built with the command

```gulp```

which will start the build process for the application and automatically launch it in a browser window when it's complete.

The application will utilize the ports __8080__ for the app itself and __1337__ for the API server.


IndexedDB Promised Library by Jake Archibald can be found [here](https://github.com/jakearchibald/idb)

Logic for the Database Promise object was used from Alexandro Perez's MWS Project Walkthrough [here](https://alexandroperez.github.io/mws-walkthrough/)