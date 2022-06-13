import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App bg-orange-200 overflow-auto h-screen ">
      <Home />
      <Loader />
    </div>
  );
}

export default App;
