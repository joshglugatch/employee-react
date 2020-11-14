import React, {useContext} from "react";
import TableData from "./TableData";
import SearchContext from "../utils/SearchContext"

//table header values and sort icons

const TableHead = () => {
    //pass on sort functions
    const {handleSortA,handleSortZ} = useContext(SearchContext)
    return(
    <table className="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name &nbsp; 
                <i onClick={handleSortA}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </svg>
                </i>
                &nbsp;
                <i onClick={handleSortZ}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </i>
            </th>
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
