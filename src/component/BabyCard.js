import React from "react";
const BabyCard = ({ eachBaby, pickFavouriteBaby, removeFromList}) => {
  

  return (
    <article
      className={`babyCard ${eachBaby.sex}`}
      onClick={() => {pickFavouriteBaby(eachBaby.id); removeFromList(eachBaby.id)}}
    >
      {eachBaby.name}
    </article>
  );
};

export default BabyCard;
