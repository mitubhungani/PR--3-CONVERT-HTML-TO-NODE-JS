// const Recipe = require("../model/Recipe.model");

// const welcome = (req, res) => {
//   res.send("Welcome to the Recipe API.");
// };

// const getView = (req, res) => {
//   res.render("index");
// };
// const getRecipe = async (req, res) => {
//   try {
//     let recipe = await Recipe.find();
//     res.status(200).send(recipe);
//   } catch (error) {
//     res.status(500).send({ err: error.message });
//   }
// };
// const createViewRecipe = (req, res) => {
//   res.render("addRecipe");
// };

// const createRecipe = async (req, res) => {
//   try {
//     console.log(req.body);
//     let recipe = await Recipe.create(req.body);
//     res.status(200).send(recipe);
//   } catch (error) {
//     res.status(500).send({ err: error.message });
//   }
// };

// module.exports = {
//   welcome,
//   getView,
//   getRecipe,
//   createViewRecipe,
//   createRecipe,
// };


















const recipes = require('../model/Recipe.model'); 

// Get all recipes
const getAllRecipes = (req, res) => {
    res.send(recipes);
};

// Add a new recipe
const addRecipe = (req, res) => {
    const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

    // Validate required fields
    if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
        return res.status(400).send('All fields are required.');
    }

    // Add new recipe
    const newRecipe = {
        id: recipes.length + 1,
        name,
        description,
        preparationTime,
        cookingTime,
        imageUrl,
        country,
        veg: veg === 'true',
    };

    recipes.push(newRecipe);
    res.send(recipes);
};

// Update a recipe by ID
const updateRecipe = (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    // Check if recipe exists
    if (!recipe) return res.status(404).send('Recipe not found');

    // Update recipe
    Object.assign(recipe, req.body);
    res.send(recipes);
};

// Delete a recipe by ID
const deleteRecipe = (req, res) => {
    const { id } = req.params;
    const index = recipes.findIndex((recipe) => recipe.id === parseInt(id));

    // Check if recipe exists
    if (index === -1) return res.status(404).send('Recipe not found');

    // Remove recipe
    recipes.splice(index, 1);
    res.send(recipes);
};

// Filter recipes
const filterRecipes = (req, res) => {
    const { veg, country, sort } = req.query;
    let filteredRecipes = recipes;

    // Apply filters
    if (veg !== undefined) filteredRecipes = filteredRecipes.filter((recipe) => recipe.veg.toString() === veg);
    if (country) filteredRecipes = filteredRecipes.filter((recipe) => recipe.country === country);

    // Apply sorting
    if (sort) {
        filteredRecipes.sort((a, b) => {
            return sort === 'lth' ? a.cookingTime - b.cookingTime : b.cookingTime - a.cookingTime;
        });
    }

    res.send(filteredRecipes);
};

module.exports = {
    getAllRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    filterRecipes,
};