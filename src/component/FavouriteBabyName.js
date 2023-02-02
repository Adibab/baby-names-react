import React from "react";


function FavouriteNamesBaby({
  favouriteBaby,
  babyNamesResults,
}) {
  const nameList = favouriteBaby.map((id) => {
    const { name, sex } = babyNamesResults[id];
    // console.log(name , sex)
    return (
      <article key={id} className={`babyCard ${sex}`}>
        {name}
      </article>
    );
  });
  //  console.log(favouriteBaby);

  return (
    <div>
      <h4>Favourite Baby Names :</h4>
      <ul className="babyCard">{nameList} </ul>
    </div>
  );
}

export default FavouriteNamesBaby