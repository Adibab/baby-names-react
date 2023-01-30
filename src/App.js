import "./App.css";
import React, { useState } from "react";
import babyNames from "./data/babyNamesData.json";

import BabyNamesForMainSection from "./component/BabyNamesMainSection";

function App() {

  const sortedName = babyNames.sort((a, b)=>a.name.localeCompare(b.name) )
  // console.log(sortedName)
  return (
    <div >
      <header>
        <h1> Baby Name Picker </h1>
      </header>
      <BabyNamesForMainSection babyNames={babyNames}/>
    </div>
  );
}

export default App;
