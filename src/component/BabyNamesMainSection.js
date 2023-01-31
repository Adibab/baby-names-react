import React from "react";
import BabyCard from "./BabyCard";

const BabyNamesForMainSection = ({ babyNames, sortedName }) => {
  return (
    <div className="babyCardContainer">
      {babyNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((eachBaby) => (
          <BabyCard key={eachBaby.id} eachBaby={eachBaby} />
        ))}
    </div>
  );
};
export default BabyNamesForMainSection;
