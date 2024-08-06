// src/pages/Home.jsx

import "../assets/styles/Home.css"; // Ensure this path is correct
import FeaturedRecipes from "../components/Home/FeaturedRecipes";
import SearchBar from "../components/Home/SearchBar";
import WelcomeMessage from "../components/Home/WelcomeMessage";

const Home = () => {
  return (
    <div className="home-page">
      <WelcomeMessage />
      <SearchBar />
      <FeaturedRecipes />
    </div>
  );
};

export default Home;
