import Headers from "../CustomData/Headers.jsx"
import Search from "../CustomData/Search.jsx"
import Table from "../CustomData/Table.jsx"
import {StaffsData} from "../Data/StaffsData.js"



const Staff=()=>{
    console.log(StaffsData)
    const headings=Object.keys(StaffsData[0])
    return (
        <>
        <Headers heading="Staff Data"/>
        <Search type={"search"} placeholder={"search staffname"}/>
        <Table headings={headings} dataSoure={StaffsData}/>
        </>
    )
}
export default Staff