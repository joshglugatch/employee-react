import React, { useState,useEffect } from "react";
import Page from "./pages/Page";
import Employees from "./employees.json"
import EmployeeContext from "./utils/EmployeeContext";
import "./App.css"
import SearchContext from "./utils/SearchContext";


function App() {
  //create states for employee array and search value
  const [employeeData, setEmployeeData] = useState([])
  const [search, setSearch] = useState("")
  
  //Grab search value on change
  const  handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  
  //Sort alphabetically ascending on button click
  const handleSortA = (e)=>{
    e.preventDefault();
    var sorted = employeeData.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    })
    
    setEmployeeData([...sorted])
  }
  
  //Sort alphabetically descending on button click
  const handleSortZ = (e)=>{
    e.preventDefault();
    var sorted = employeeData.sort(function(a,b){
      if(b.name.toLowerCase() < a.name.toLowerCase()) { return -1; }
      if(b.name.toLowerCase() > a.name.toLowerCase()) { return 1; }
      return 0;
    })
    
    setEmployeeData([...sorted])
  }

  //render data on each change of search
useEffect(()=>{
  if(search === ""){
    setEmployeeData(Employees)
  }else{
    setEmployeeData(Employees.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())))
  }

},[search])

  
  

//provide values for search/sort functions and employee data to page

  return (
    <SearchContext.Provider value={{search, handleSearch, handleSortA, handleSortZ}}>
      <EmployeeContext.Provider value={{employeeData}}>
        <Page />
      </EmployeeContext.Provider>
    </SearchContext.Provider>
  );
}


export default App;
