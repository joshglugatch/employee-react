import React, {useContext} from "react";
import EmployeeContext from "../utils/EmployeeContext"


const TableData = () => {
  //pass on employee data
    const {employeeData} = useContext(EmployeeContext);
   


    return(
    <tbody>
        {employeeData.map(employee=>(
          <tr>
          <th scope="row"><img src={employee.picture.thumbnail} alt={employee.name}/></th>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.dob.age}</td>
        </tr>
        ))}
        
        
    </tbody>
    
    )
};

export default TableData;
