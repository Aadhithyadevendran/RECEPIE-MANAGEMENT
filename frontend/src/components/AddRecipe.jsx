import  { useState } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    cuisine: "",
    category: "",
    ingredients: "",
    preparationTime: "",
    cookingTime: "",
    status: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipes", recipe);
      alert("Recipe added successfully!");
      setRecipe({
        recipeName: "",
        cuisine: "",
        category: "",
        ingredients: "",
        preparationTime: "",
        cookingTime: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="recipeName"
        placeholder="Recipe Name"
        value={recipe.recipeName}
        onChange={handleChange}
        required
      />
      <input
        name="cuisine"
        placeholder="Cuisine"
        value={recipe.cuisine}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={recipe.category}
        onChange={handleChange}
        required
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (comma-separated)"
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />
      <input
        name="preparationTime"
        placeholder="Preparation Time"
        value={recipe.preparationTime}
        onChange={handleChange}
      />
      <input
        name="cookingTime"
        placeholder="Cooking Time"
        value={recipe.cookingTime}
        onChange={handleChange}
      />
      <input
        name="status"
        placeholder="Status"
        value={recipe.status}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
