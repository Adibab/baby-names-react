import React from "react";
const BabyCard = ({ eachBaby, pickFavouriteBaby, removeBabyFrmMainList }) => {
  return (
    <article
      className={`babyCard ${eachBaby.sex}`}
      onClick={() => {
        pickFavouriteBaby(eachBaby);
        removeBabyFrmMainList(eachBaby.id);
      }}
    >
      {eachBaby.name}
    </article>
  );
};

export default BabyCard;
