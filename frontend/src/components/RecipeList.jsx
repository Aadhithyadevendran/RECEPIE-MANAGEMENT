import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("http://localhost:5000/api/recipes");
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await axios.delete(`http://localhost:5000/api/recipes/${id}`);
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.recipeName}</h3>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>Category: {recipe.category}</p>
          <p>Status: {recipe.status}</p>
          <Link to={`/edit/${recipe._id}`}>Edit</Link>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
      <Link to="/add">
        <button>Add New Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeList;
