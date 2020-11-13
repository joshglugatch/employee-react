import React, { useState,useEffect } from "react";
import Page from "./pages/Page";
import Employees from "./employees.json"
import EmployeeContext from "./utils/EmployeeContext";
import "./App.css"


function App() {
  const [employeeData, setEmployeeData] = useState([])
  

useEffect(()=>{
    
    setEmployeeData(Employees)
    //console.log(employeeData)
},[])

  
  



  return (
    <EmployeeContext.Provider value={{employeeData}}>
      <Page />
    </EmployeeContext.Provider>
  );
}


export default App;
