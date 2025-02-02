import "./App.css";
import Header from "./components/Header";
import MyButton from "./components/MyButton";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Hello, React with Vite!</h1>
        <p>Welcome to your new project.</p>
        <MyButton />
      </div>
    </>
  );
}

export default App;
