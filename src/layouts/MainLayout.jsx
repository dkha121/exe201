import React from "react";
import Navbar from "../component/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
