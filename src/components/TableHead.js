import React from "react";
import TableData from "./TableData";

const TableHead = () => {
    return(
    <table className="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
        </tr>
        </thead>
    
    <TableData/>
    </table>
    )
};

export default TableHead;
