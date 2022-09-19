import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Debouncing from "./screens/Debouncing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debouncing />} />
      </Routes>
    </div>
  );
}

export default App;
