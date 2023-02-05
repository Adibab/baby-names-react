import React from "react";

function SearchBabyNames({ searchFunc, filterSex, babyNamesResults }) {
  return (
    <div className="searchSection">
      <section>
        <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Search baby name"
          onChange={searchFunc}
        />
      </section>
      
    </div>
  );
}
export default SearchBabyNames;
