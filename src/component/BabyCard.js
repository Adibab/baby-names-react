import React from "react";
const BabyCard = ({ eachBaby}) => {
  return (
    <article className={`babyCard ${eachBaby.sex}`}> {eachBaby.name}</article>
  );
};

export default BabyCard;
