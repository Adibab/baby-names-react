import React from "react";
function FavouriteNamesBaby({
  favouriteBaby,
  babyNamesResults,
  removeBabyFrmFavList,
}) {
  // console.log(favouriteBaby);
  const nameList = favouriteBaby.map((babyObj) => {
    const { name, sex } = babyObj;
    //  console.log(name , sex)
    return (
      <article
        key={babyObj.id}
        className={`babyCard ${sex} favcard`}
        onClick={() => removeBabyFrmFavList(babyObj)}
      >
        {name}
      </article>
    );
  });

  return (
    <div>
      <h4>Click some names below to add to your Favourite List ... </h4>
      <ul className="babyCard" onClick={() => nameList}>
        {nameList}
        {/* {console.log(nameList)} */}
      </ul>
    </div>
  );
}

export default FavouriteNamesBaby;
