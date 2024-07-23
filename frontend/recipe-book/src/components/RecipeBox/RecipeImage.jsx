// src/components/RecipeImage.jsx
import "../../assets/styles/RecipeImage.css";
import PropTypes from "prop-types";

const RecipeImage = ({ image }) => {
  return <img src={image} alt="Recipe" className="recipe-image" />;
};

RecipeImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default RecipeImage;
