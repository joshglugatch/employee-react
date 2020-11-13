import React, { useState,useEffect } from "react";
import Page from "./pages/Page";
import getEmployee from "./utils/API";
import EmployeeContext from "./utils/EmployeeContext";
import "./App.css"


function App() {

  const [picture, setPicture] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
   

useEffect(()=>{
  getEmployee().then(res=>{
    console.log(res.data.results[0])
    setPicture(res.data.results[0].picture.thumbnail)
    setName(res.data.results[0].name.first +" "+ res.data.results[0].name.last)
    setEmail(res.data.results[0].email)
    setPhone(res.data.results[0].phone)
    setAge(res.data.results[0].dob.age)
  })
},[])
  
 
  return (
    <EmployeeContext.Provider value={{picture,name,email,phone,age}}>
      <Page />
    </EmployeeContext.Provider>
  );
}


export default App;
