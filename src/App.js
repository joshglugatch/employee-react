import React, { useState,useEffect } from "react";
import Page from "./pages/Page";
import Employees from "./employees.json"
import EmployeeContext from "./utils/EmployeeContext";
import "./App.css"
import SearchContext from "./utils/SearchContext";


function App() {
  const [employeeData, setEmployeeData] = useState([])
  const [search, setSearch] = useState("")
  
  const  handleSearch = (e)=>{
    setSearch({search: e.target.value})
  }
  
  
  

useEffect(()=>{
setEmployeeData(Employees)
console.log(search)

},[search])

  
  



  return (
    <SearchContext.Provider value={{search, handleSearch}}>
      <EmployeeContext.Provider value={{employeeData}}>
        <Page />
      </EmployeeContext.Provider>
    </SearchContext.Provider>
  );
}


export default App;
