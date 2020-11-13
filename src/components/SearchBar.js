import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext"

const SearchBar = () => {
    const {handleSearch} = useContext(SearchContext)
  return (
  <div className="searchDiv">
    <input type="text" className="search" placeholder="Search for an employee" 
    onChange={handleSearch}/>
  </div>
  )
};

export default SearchBar;
