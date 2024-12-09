// // Initial recipe array (mock database)
// let recipes = [
//   {
//       name: 'Spaghetti Carbonara',
//       description: 'A classic Italian pasta dish.',
//       preparationTime: '15 minutes',
//       cookingTime: '15',
//       imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
//       country: "India",
//       veg: true,
//       id: 1,
//   },
// ];

// // Export recipes array for manipulation
// module.exports = recipes;

// const mongoose = require('mongoose')

// const initialRecipe = new mongoose.Schema({
//   name: 'Spaghetti Carbonara',
//   description: 'A classic Italian pasta dish.',
//   preparationTime: '15 minutes',
//   cookingTime: '15 minutes',
//   imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
//   country: 'Italy',
//   veg: false,
//   id: 1,
// })

// const Recipe = mongoose.model('Recipe',initialRecipe)

// module.exports = Recipe





// const mongoose = require('mongoose')

// const recipeSchema = new mongoose.Schema({
//   name: String,
//     description: String,
//     preparationTime: Number,
//     cookingTime: Number,
//     imageUrl: String,
//     country: String,
//     veg: String
// })

// const Recipe = mongoose.model('Recipe', recipeSchema)

// module.exports = Recipe


// Initial recipe array (mock database)
let recipes = [
  {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish.',
      preparationTime: '15 minutes',
      cookingTime: '15',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      country: "India",
      veg: true,
      id: 1,
  },
];

// Export recipes array for manipulation
module.exports = recipes;