import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";

function App() {
  return (
    <div className="App bg-black overflow-auto w-full h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
