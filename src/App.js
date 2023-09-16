import "./App.css";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
