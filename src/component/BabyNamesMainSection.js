import React from "react";
import BabyCard from "./BabyCard";


const BabyNamesForMainSection = ({babyNames, sortedName}) => {
  return (
    <div className="babyCardContainer">
      {babyNames.map((eachBaby) => (
        <BabyCard key={eachBaby.id} eachBaby={eachBaby} />
      ))}
    </div>
  );
};
export default BabyNamesForMainSection;
