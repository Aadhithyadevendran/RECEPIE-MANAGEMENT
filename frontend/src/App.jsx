import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/RecipeList";
import RecipeList from "./components/RecipeList";
import SearchRecipes from "./components/SearchRecipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        
        <Route path="/add" element={<AddRecipe />} />
        
        <Route path="/edit/:id" element={<EditRecipe />} />
        
        <Route path="/search" element={<SearchRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
