import React from "react";
import "./recentcreation.css";
import ListImage from "./ListImage/ListImage";

function RecentCreation() {
  return (
    <div className="mt-10">
      <h1 className=" text-white text-2xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-purple-400 to-blue-400 ">
          Recent
        </span>{" "}
        Creations
      </h1>
      <div className="flex justify-between">
        <div className="flex search-input">
          <div className="mr-3">
            <input
              type="text"
              disabled
              placeholder="Search temporarily disabled"
              className="text-gray-600 bg-gray-100 text-xs p-2 w-48 text-center rounded-md"
            />
          </div>
          <button className="bg-gray-900 text-sm px-2 rounded-md">
            Search
          </button>
        </div>
        <div className="flex category w-72 bg-gray-900 rounded-md">
          <div className="px-6 w-1/3 flex justify-center text-white rounded-md items-center active bg-gradient text-sm">
            Trending
          </div>
          <div className="px-6 w-1/3 flex justify-center text-white rounded-md items-center bg-gray-900 text-sm">
            New
          </div>
          <div className="px-6 w-1/3 flex justify-center text-white rounded-md items-center bg-gray-900 text-sm">
            Top
          </div>
        </div>
      </div>
      <div className="flex mt-6 w-44 bg-gray-900 rounded-md">
        <div className="px-6 py-2 flex justify-center w-1/2 text-white rounded-md items-center active bg-gradient text-sm">
          All
        </div>
        <div className="px-6 py-2 flex justify-center w-1/2 text-white rounded-md items-center bg-gray-900 text-sm">
          Upscaled
        </div>
      </div>
      <ListImage />
    </div>
  );
}

export default RecentCreation;
