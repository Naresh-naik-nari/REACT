import Headers from "../CustomData/Headers.jsx"
import Search from "../CustomData/Search.jsx"
import Table from "../CustomData/Table.jsx"
import {SubjectData} from "../Data/SubjectData.js"



const Subject=()=>{
    console.log(SubjectData)
    const headings=Object.keys(SubjectData[0])
    return (
        <>
    <Headers heading={"Subject Data"}/>
    <Search type={"search"} placeholder={"search Subjectname"}/>
    <Table headings={headings} dataSoure={SubjectData}/>
        </>
    )
}
export default Subject