import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
      </div>
    </>
  );
};

export default App;
