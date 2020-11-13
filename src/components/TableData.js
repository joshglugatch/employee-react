import React, {useContext} from "react";
import EmployeeContext from "../utils/EmployeeContext"


const TableData = () => {
    const {name,email,picture,phone,age} = useContext(EmployeeContext);

    return(
    <tbody>

        <tr>
          <th scope="row"><img src={picture} alt="nameHere"/></th>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{age}</td>
        </tr>
        
    </tbody>
    
    )
};

export default TableData;
