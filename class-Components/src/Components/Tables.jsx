import { Component } from "react";
import Table from "../Tables/Table";
import { StudentsData } from "../Tables/TableData";

class Tables extends Component{
    render(){
    const heading=Object.keys(StudentsData[0])   
        return(
            <>
            <Table headings={heading} datasoure={StudentsData}/>
            </>
        )
    }
}
export default Tables