const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeID: String,
  recipeName: String,
  cuisine: String,
  category: String,
  ingredients: [String],
  chef: String,
  preparationTime: String,
  cookingTime: String,
  status: String,
});

module.exports = mongoose.model("recipe", RecipeSchema);
