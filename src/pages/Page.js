import React from "react";
import Navbar from "../components/Nav";
import TableContainer from "../components/TableContainer";
import TableData from "../components/TableData";
import TableHead from "../components/TableHead";



function Page() {
  return (
    <div>
      
      <Navbar/>
      <TableContainer>
        <TableHead/>
        <TableData/>
      </TableContainer>
    </div>
  );
}

export default Page;
