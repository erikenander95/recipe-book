// src/pages/RecipePage.jsx
import { useParams } from "react-router-dom";
import RecipeBox from "../components/RecipeBox/RecipeBox"; // Adjust path if needed

const RecipePage = () => {
  const { id } = useParams(); // Get the recipe ID from the URL

  // Fetch or retrieve the recipe details based on the ID
  // This is where you might fetch data from an API or use a state management solution

  return (
    <div className="recipe-page">
      <RecipeBox view="recipe" recipeId={id} /> {/* Pass relevant props */}
    </div>
  );
};

export default RecipePage;
