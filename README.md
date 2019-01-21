# Mongoose Books
My first [public] full-stack MERN app that utilizes the Google Books API to search for books, and a 
remote MongoDB server to save the details of books of interest and Display results on a React.js front-end. 

Live demo on [Heroku](https://mongoosebooks-zs.herokuapp.com/)

## Install Guide
### Software Requirements
- A package manager such as NPM or Yarn 
- A MongoDB server in the background listening on port 27017 with no user restrictions

### Setup
1. Clone the repo to your machine
2. From your terminal or shell, cd into the freshly cloned repo
3. From the project root, run `npm install` to install the dependencies. This will also install the 
React dependencies in the client folder
4. Create a `.env` file in the project root. This file should at minimum have a MONGOURI value that points 
to your instance of MongoDB. An example file:
```
NODE_ENV=production
MONGOURI=mongodb://localhost:27017/mongoosebooks
```
5. Double check your MongoDB server is running in the background on its default port. ExpressJS will not
run if it cannot find an instance of the MongoDB server to connect to in development.
6. While in the root folder, run `npm start` to start both the Express server and React dev server. The Express
server will not be signaled to start if you are in the client folder or deeper when running the start command.
7. The React dev server will automatically open a tab in your default browser when the server finishes starting. 
If it does not, open your browser and go to http://localhost:3000
