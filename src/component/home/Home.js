import "./App.css";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

import { Routes, Route, Link } from "react-router-dom"
function Home() {
  return (
    <div className="Home">
     
      <Navbar />
      <Content />
      <Footer />


    </div>
  );
}

export default Home;