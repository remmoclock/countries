import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Country from "./components/Country";
import Err404 from "./pages/Err404/Err404";

function App() {
  return (
    <div className="App bg-black overflow-auto w-full h-screen ">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/404" element={<Err404 />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
