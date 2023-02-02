import React from "react";
function FavouriteNamesBaby({ favouriteBaby, babyNamesResults }) {

  
  // console.log(favouriteBaby)
  const nameList = favouriteBaby.map((babyObj) => {
    const { name, sex } = babyObj;
    //  console.log(name , sex)
    return (
      <article key={babyObj.id} className={`babyCard ${sex}`}>
        {name}
      </article>
    );
  });

  return (
    <div >
      <h4>Favourite Baby Names :</h4>
      <ul className="babyCard">
        {nameList}
        {/* {console.log(nameList)} */}
      </ul>
      
    </div>
  );
}

export default FavouriteNamesBaby;
