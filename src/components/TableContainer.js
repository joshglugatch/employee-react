import React from "react";
import SearchBar from "./SearchBar";
import TableHead from "./TableHead";

//container for all table data and search bar

const TableContainer = () => {
  return (
  <div className="container">
    <p className="info">Search Employees or Sort Alphabetically by Name</p>
    <SearchBar/>
    <TableHead/>
  </div>
  )
};

export default TableContainer;
