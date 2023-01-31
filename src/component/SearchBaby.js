import React from "react";
import { useState } from "react";

function SearchBabyNames({ babyNames }) {
  const [searchBabyNames, setSearchBabyNames] = useState([]);
  function searchFunc(event) {
    const searchWord = event.target.value.toLowerCase();

    const newFilter = babyNames.filter((eachBaby) =>
      eachBaby.name.toLowerCase().includes(searchWord)
    );
    setSearchBabyNames(newFilter);
  }

  return (
    <div>
      <section className="searchSection">
        <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Search baby name"
          onChange={searchFunc}
        />
      </section>
      {searchBabyNames.length !== 0 && (
        <div>
          {searchBabyNames.map((eachBaby) => eachBaby.name)}
        </div>
      )}
    </div>
  );
}
export default SearchBabyNames;
