import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Err404 from "./pages/Err404/Err404";

function App() {
  return (
    <div className="App bg-black overflow-auto w-full h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        {/* <Route path="*" element={<Err404 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
