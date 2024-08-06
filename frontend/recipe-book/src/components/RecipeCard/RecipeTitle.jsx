// src/components/RecipeTitle.jsx
// Absolute path
import "/src/assets/styles/RecipeTitle.css";

import PropTypes from "prop-types";

const RecipeTitle = ({ title }) => {
  return <h2 className="recipe-title">{title}</h2>;
};

RecipeTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipeTitle;
