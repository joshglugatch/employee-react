import React, {useContext} from "react";
import EmployeeContext from "../utils/EmployeeContext"


const TableData = () => {
    const {employeeData} = useContext(EmployeeContext);
    console.log(employeeData)
   


    return(
    <tbody>
        {employeeData.map(employee=>(
          <tr>
          <th scope="row"><img src={employee.picture.thumbnail} alt="nameHere"/></th>
          <td>{employee.name.first +" "+ employee.name.last}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.dob.age}</td>
        </tr>
        ))}
        
        
    </tbody>
    
    )
};

export default TableData;
