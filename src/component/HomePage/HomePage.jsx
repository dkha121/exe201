import React from "react";
import FeaturedModels from "./FeaturedModels/FeaturedModels";
import RecentCreation from "./RecentCreation/RecentCreation";

function HomePage() {
  return (
    <div className="pt-24 px-20">
      <FeaturedModels />
      <RecentCreation />
    </div>
  );
}

export default HomePage;
