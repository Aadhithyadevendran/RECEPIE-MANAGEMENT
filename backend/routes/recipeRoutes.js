const express = require("express");
const {
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", addRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);
router.get("/search", searchRecipes);

module.exports = router;
