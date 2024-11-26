import { useState } from "react";
import axios from "axios";

const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/search?query=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Search by Recipe Name, Cuisine, or Ingredients"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((recipe) => (
          <div key={recipe._id}>
            <h3>{recipe.recipeName}</h3>
            <p>Cuisine: {recipe.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;
