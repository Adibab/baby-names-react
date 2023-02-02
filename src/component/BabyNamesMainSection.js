import React from "react";
import BabyCard from "./BabyCard";

const BabyNamesForMainSection = ({
  babyNamesResults,
  pickFavouriteBaby,
  removeBabyFrmMainList,
}) => {
  return (
    <div className="babyCardContainer">
      {babyNamesResults
        // .sort((a, b) => a.name.localeCompare(b.name))
        .map((eachBaby) => (
          <BabyCard
            key={eachBaby.id}
            eachBaby={eachBaby}
            pickFavouriteBaby={pickFavouriteBaby}
            removeBabyFrmMainList={removeBabyFrmMainList}
          />
        ))}
    </div>
  );
};
export default BabyNamesForMainSection;
