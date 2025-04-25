import Headers from "../CustomData/Headers.jsx"
import Search from "../CustomData/Search.jsx"
import Table from "../CustomData/Table.jsx"
import {StudentsData} from "../Data/StudentsData.js"


const Student=()=>{
    console.log(StudentsData)
    const headings=Object.keys(StudentsData[0])
    return (
        <>
    <Headers heading={"Student Data"}/>
    <Search type={"search"} placeholder={"search Student by name and class"}/>
    <Table headings={headings} dataSoure={StudentsData}/>
        </>
    )
}
export default Student