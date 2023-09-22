import Home from "./component/home/Home";
import Login from "./component/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./component/HomePage/HomePage";
import FeaturesLayout from "./layouts/FeaturesLayout";
import AIGeneration from "./component/GeneratePage/AIGeneration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/features" element={<FeaturesLayout />}>
            <Route index element={<HomePage />} />
            <Route path="ai-generation" element={<AIGeneration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
