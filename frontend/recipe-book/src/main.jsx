import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyButton from "./components/MyButton.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyButton />
  </StrictMode>
);
