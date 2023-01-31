import "./App.css";
import React, { useState } from "react";
import babyNames from "./data/babyNamesData.json";
import Heading from "./component/Heading";
import SearchBabyNames from "./component/SearchBaby";
import BabyNamesForMainSection from "./component/BabyNamesMainSection";

function App() {
  const [babyNamesData, setBabyNamesData] = useState(babyNames);

  function searchFunc(event = "") {
    setBabyNamesData(() => {
      return babyNames.filter((baby) =>
        baby.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
  }

  return (
    <div className="App">
      <Heading />

      <SearchBabyNames searchFunc={searchFunc} />

      <h1> Choose a name for you future... </h1>

      <BabyNamesForMainSection babyNamesResults={babyNamesData} />
    </div>
  );
}

export default App;
