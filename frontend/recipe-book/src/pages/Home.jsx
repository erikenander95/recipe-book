// src/pages/Home.jsx
import "../assets/styles/Home.css"; // Correct path to Home.css
import RecipeBox from "../components/RecipeBox/RecipeBox";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <RecipeBox />
    </div>
  );
};

export default Home;
