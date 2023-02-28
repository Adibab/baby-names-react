import "./App.css";
import React, { useState } from "react";
import babyNames from "./data/babyNamesData.json";
import Heading from "./component/Heading";
import SearchBabyNames from "./component/SearchBaby";
import BabyNamesForMainSection from "./component/BabyNamesMainSection";
import FavouriteNamesBaby from "./component/FavouriteBabyName";


function App() {
  const [babyNamesData, setBabyNamesData] = useState(babyNames);
  // console.log(babyNamesData)
  // console.log(babyNames)

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

  // console.log(babyNamesData)
  function removeBabyFrmFavList(baby) {
    const filteredBabyList = favouriteBaby.filter(
      (eachBaby) => eachBaby.id !== baby.id
    );
    setFavouriteBaby(filteredBabyList);
    console.log(baby);
    const getDeletedBabyObjId = baby.id;
    console.log(getDeletedBabyObjId);

    // currently the object is adding back to the end of array but i want o add it on its original position
    // setBabyNamesData([
    //   ...babyNamesData, baby
    // ]);

    // babyNamesMainSection is a state of an array of objects. Each object contains the id as a key, corresponding to the index of the object in the array. so get the  deleted aby object id from the favorites section, trying to reinserting the object back into the array and update state

    // setBabyNamesData([...babyNamesData.splice(getDeletedBabyObjId, 0, baby)]);
    //  console.log(babyNamesData);

const copyNames = [...babyNamesData];
console.log(babyNamesData, "original before splice");
console.log(copyNames, "copy before splice");
copyNames.splice(getDeletedBabyObjId, 0, baby);
 console.log(copyNames, "copy after splice");
 console.log(babyNamesData, "original after splice");
setBabyNamesData(copyNames);

  }
function filterSex ( sex = ""){
  setBabyNamesData(()=> babyNames.filter((eachBaby)=> eachBaby.sex.includes(sex)))
}

  return (
    <div className="App">
      <Heading />
      <SearchBabyNames
        searchFunc={searchFunc}
        babyNamesResults={babyNamesData}
      />
      <div className="searchSection">
        <img
          className="serachBaby"
          src="https://toppng.com/uploads/preview/dodo-clipart-baby-nap-baby-shower-clipart-115635378013dtryva3rd.png"
          alt="baby icon"
          onClick={() => filterSex()}
        />
        <img
          className="serachBaby"
          src="https://w7.pngwing.com/pngs/298/322/png-transparent-baby-illustration-infant-baby-shower-girl-baby-elephant-mammal-child-carnivoran-thumbnail.png"
          alt="girl_baby"
          onClick={() => filterSex("f")}
        />
        <img
          className="serachBaby"
          src="https://w7.pngwing.com/pngs/890/592/png-transparent-baby-in-hammock-illustration-baby-shower-infant-gift-free-baby-boy-mammal-child-bathroom-thumbnail.png"
          alt="boy_baby"
          onClick={() => filterSex("m")}
        />
      </div>

      <FavouriteNamesBaby
        favouriteBaby={favouriteBaby}
        babyNamesResults={babyNamesData}
        removeBabyFrmFavList={removeBabyFrmFavList}
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
