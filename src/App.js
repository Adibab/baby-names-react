import "./App.css";
import React, { useState } from "react";
import babyNames from "./data/babyNamesData.json";
import Heading from "./component/Heading";
import SearchBabyNames from "./component/SearchBaby";

import BabyNamesForMainSection from "./component/BabyNamesMainSection";

function App() {
  // const sortedName = babyNames.sort((a, b) => a.name.localeCompare(b.name));
  // console.log(sortedName)

  return (
    <div className="App">
      <Heading />
   
      <SearchBabyNames babyNames={babyNames} />
      <h1> Choose a name for you future... </h1>

      <BabyNamesForMainSection babyNames={babyNames} />
    </div>
  );
}

export default App;
