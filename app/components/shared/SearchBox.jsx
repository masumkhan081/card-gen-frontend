import React from "react";

const SearchBox = ({ search, chgHandler }) => {
  return (
    <>
      <input
        type="search"
        id="search"
        placeholder="Search..."
        className="mb-7"
        value={search}
        onChange={chgHandler}
      />
    </>
  );
};

export default SearchBox;
