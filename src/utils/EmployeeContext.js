import React from "react";
// default context object with properties corresponding to Provider values

const EmployeeContext = React.createContext({
  picture:"www.url.com",
  name:"John Smith",
  email:"johnsmith@gmail.com",
  phone: "(818)507-2738",
  DOB:"10/24/1995",

});

export default EmployeeContext;
