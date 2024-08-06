// src/components/RecipeIngredients.jsx
import "../../assets/styles/RecipeIngredients.css";
import PropTypes from "prop-types";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <ul className="recipe-ingredients">
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
};

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeIngredients;
