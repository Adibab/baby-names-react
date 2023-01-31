import React from "react";

function SearchBabyNames({ searchFunc }) {
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
    </div>
  );
}
export default SearchBabyNames;
