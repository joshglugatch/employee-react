import React from "react";
// default context object with properties corresponding to Provider values

//create context for search related data
const SearchContext = React.createContext({
  search:"",
  
});

export default SearchContext;
