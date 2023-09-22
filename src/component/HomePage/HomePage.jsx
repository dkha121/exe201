import React from "react";
import FeaturedModels from "./FeaturedModels/FeaturedModels";
import RecentCreation from "./RecentCreation/RecentCreation";

function HomePage() {
  return (
    <div className="">
      <FeaturedModels />
      <RecentCreation />
    </div>
  );
}

export default HomePage;
