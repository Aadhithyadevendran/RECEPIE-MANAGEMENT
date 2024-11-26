import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    recipeName: "",
    cuisine: "",
    category: "",
    ingredients: "",
    preparationTime: "",
    cookingTime: "",
    status: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/${id}`
      );
      setRecipe(response.data);
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/recipes/${id}`, recipe);
      alert("Recipe updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating recipe:", error);
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
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipe;
