// src/components/RecipeBox/RecipeBox.jsx
import RecipeTitle from "./RecipeTitle";
import RecipeImage from "./RecipeImage";
import RecipeDescription from "./RecipeDescription";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import "../../assets/styles/RecipeBox.css";

const RecipeBox = () => {
  const recipe = {
    title: "Delicious Pasta",
    image: "path/to/image.jpg", // Replace with your image path
    description: "A delicious pasta recipe with a rich tomato sauce.",
    ingredients: [
      "200g pasta",
      "100g tomato sauce",
      "50g cheese",
      "1 clove garlic",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Boil pasta according to package instructions.",
      "In a pan, sauté garlic until fragrant.",
      "Add tomato sauce and cook for 5 minutes.",
      "Mix pasta with the sauce and add cheese on top.",
      "Season with salt and pepper, then serve.",
    ],
  };

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

export default RecipeBox;
