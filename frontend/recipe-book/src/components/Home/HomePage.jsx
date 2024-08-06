// src/components/home/HomePage.jsx
import "../../assets/styles/HomePage.css"; // Ensure this path is correct
import { Link } from "react-router-dom"; // To navigate to other pages

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Recipe Book</h1>
      <div className="home-features">
        <Link to="/browse-recipes">
          <button>Browse Recipes</button>
        </Link>
        <Link to="/search-recipes">
          <button>Search Recipes</button>
        </Link>
        <Link to="/add-recipe">
          <button>Add Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
