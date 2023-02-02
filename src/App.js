import "./App.css";
import React, { useState } from "react";
import babyNames from "./data/babyNamesData.json";
import Heading from "./component/Heading";
import SearchBabyNames from "./component/SearchBaby";
import BabyNamesForMainSection from "./component/BabyNamesMainSection";
import FavouriteNamesBaby from "./component/FavouriteBabyName";

function App() {
  const [babyNamesData, setBabyNamesData] = useState(babyNames);

  function searchFunc(event = "") {
    setBabyNamesData(() => {
      return babyNames.filter((baby) =>
        baby.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
  }

  const [favouriteBaby, setFavouriteBaby] = useState([]);

  const pickFavouriteBaby = (babyObj) => {
    // saving the full baby obj tot he setFavouriteBaby  & ...favouriteBaby is carrying the previous baby object & current selected babyObject
   setFavouriteBaby([...favouriteBaby, babyObj]);
  //  console.log(babyObj)
   
  };
  // console.log(...favouriteBaby)

  const removeBabyFrmMainList = (id) => {
    const newBabyNamesList = babyNamesData.filter(
      (eachBaby) => eachBaby.id !== id
    );
    setBabyNamesData(newBabyNamesList);
  };

  return (
    <div className="App">
      <Heading />

      <SearchBabyNames searchFunc={searchFunc} />
      <FavouriteNamesBaby
        favouriteBaby={favouriteBaby}
        babyNamesResults={babyNamesData}
      />

      <h1> Choose a name for you future... </h1>

      <BabyNamesForMainSection
        babyNamesResults={babyNamesData}
        pickFavouriteBaby={pickFavouriteBaby}
        removeBabyFrmMainList={removeBabyFrmMainList}
      />
    </div>
  );
}

export default App;
