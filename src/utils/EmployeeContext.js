import React from "react";
// default context object with properties corresponding to Provider values

//create context for employee data

const EmployeeContext = React.createContext({
  picture:"www.url.com",
  name:"John Smith",
  email:"johnsmith@gmail.com",
  phone: "818-507-2738",
  age:"24"
  
});

export default EmployeeContext;
