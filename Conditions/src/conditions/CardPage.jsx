import { studentData } from "./DataPage";

const CardPage = () => {
    const cardcontainer = {

    }
    console.log(studentData)
    return <>
        <div style={cardcontainer}>
            {studentData.length > 0 ? (
                <>
                    {studentData.map((student) => {
                        return <>
                            <div>
                                <h2>ID : {student.id}</h2>
                                <div>
                                    <p>Name : {student.name}</p>
                                    <p>Age : {student.age}</p>
                                    <p>email : {student.email}</p>
                                    <p>Pnone No : {student.phone}</p>
                                </div>
                            </div>
                        </>
                    })}
                </>
            ) : (

                <>
                    <p>Data not Found</p></>
            )}
        </div>
    </>
}
export default CardPage