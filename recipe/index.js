// const express = require("express");
// const path = require("path");
// const recipeRouter = require("./router/Recipe.route");
// const dbConnect = require("./config/dbConnect");

// const app = express();
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json())
// app.use("/", recipeRouter);

// app.listen(8090, () => {
//   console.log("listening on port 8090");
//   dbConnect()
// });




const express = require('express');
const path = require('path');
const recipeRoutes = require('./router/Recipe.route');

const app = express();

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file serving
// app.use(express.static(path.join(__dirname, 'views')));

// Base route
app.get('/', (req, res) => res.send('welcome to the recipe api'));

// Register routes
app.use('/recipe', recipeRoutes);

// Serve index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve add recipe page
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'addRecipe.html'));
});

// Start server
const PORT = 8090;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));