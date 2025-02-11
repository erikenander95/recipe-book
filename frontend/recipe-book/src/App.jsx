import "./App.css";
import Header from "./components/Header";
import MyButton from "./components/MyButton";
import BottomSection from "./components/BottomSection";
import "normalize.css";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ minHeight: "50%", backgroundColor: "red" }}>
        <Header />
        <h1>Hello, React with Vite!</h1>
        <p>Welcome to your new project.</p>
        <MyButton />
      </div>
      <div style={{ minHeight: "50%", backgroundColor: "green" }}>
        <BottomSection />
      </div>
    </div>
  );
}

export default App;
