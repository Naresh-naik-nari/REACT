import { studentData } from "./DataPage";

const TablePage=()=>{
    console.log(studentData)

    return <>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>email</th>
                <th>phone</th>
            </tr>
        </thead>
        <tbody>
            {studentData.length>0?(
                <div>
                    {studentData.map((student)=>{
                        return <>
                        <tr>
                            <td>ID : {student.id}</td>
                            <td>Name : {student.name}</td>
                            <td>Age : {student.age}</td>
                            <td>email : {student.email}</td>
                            <td>phone : {student.phone}</td>
                        </tr>
                        </>
                    })}
                </div>
            ):(
                <>
                <p>Data not found</p>
                </>
            )}
        </tbody>
    </table>
    </>
}
export default TablePage