// src/components/RecipeBox/RecipeCard.jsx
import PropTypes from "prop-types"; // Import PropTypes
import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import RecipeDescription from "./RecipeDescription";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import "../../assets/styles/RecipeBox.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-box">
      <RecipeTitle title={recipe.title} />
      <RecipeImage image={recipe.image} />
      <RecipeDescription description={recipe.description} />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeInstructions instructions={recipe.instructions} />
    </div>
  );
};

// Define PropTypes for RecipeCard
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RecipeCard;
