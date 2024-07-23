// src/components/RecipeInstructions.jsx
import "../../assets/styles/RecipeInstructions.css";
import PropTypes from "prop-types";

const RecipeInstructions = ({ instructions }) => {
  return (
    <ol className="recipe-instructions">
      {instructions.map((instruction, index) => (
        <li key={index}>{instruction}</li>
      ))}
    </ol>
  );
};

RecipeInstructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeInstructions;
