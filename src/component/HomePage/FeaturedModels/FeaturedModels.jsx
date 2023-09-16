import React from "react";
import FeaturedList from "./FeaturedList/FeaturedList";

function FeaturedModels() {
  return (
    <div>
      <div>
        <h1 className=" text-white text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-purple-400 to-blue-400 font-semibold">
            Featured
          </span>{" "}
          Models
        </h1>
      </div>
      <div>
        <FeaturedList />
      </div>
    </div>
  );
}

export default FeaturedModels;
