import React from "react";
import FeatureNavbar from "../component/navbar/FeatureNavbar";
import { Outlet } from "react-router-dom";

function FeaturesLayout() {
  return (
    <div className="w-full relative flex justify-start">
      <div className="w-[15%] h-screen fixed top-0 left-0 overflow-y-auto border-r border-gray-100">
        <FeatureNavbar />
      </div>
      <div className="w-[85%] absolute top-0 right-0 py-4 px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default FeaturesLayout;
