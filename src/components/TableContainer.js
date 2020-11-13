import React from "react";
import SearchBar from "./SearchBar";
import TableHead from "./TableHead";

const TableContainer = () => {
  return (
  <div className="container">
    <SearchBar/>
    <TableHead/>
  </div>
  )
};

export default TableContainer;
