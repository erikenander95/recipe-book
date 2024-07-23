// src/components/RecipeDescription.jsx
import "../../assets/styles/RecipeDescription.css";
import PropTypes from "prop-types";

const RecipeDescription = ({ description }) => {
  return <p className="recipe-description">{description}</p>;
};

RecipeDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default RecipeDescription;
