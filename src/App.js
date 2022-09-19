import Home from "./screens/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Debounce from "./components/debounce/Debounce";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debounce />} />
      </Routes>
    </div>
  );
}

export default App;
