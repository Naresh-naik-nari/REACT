import FormTag from "../CustomData/FormTag"
import Headers from "../CustomData/Headers"
import { SignUpData } from "../Data/SignUpData"

const SignUpPage=()=>{
    const headings=Object.keys(SignUpData[0])
    return (
        <div>
        <Headers heading={"SignUp Page"}/>
        <FormTag headings={headings} dataSoure={SignUpData}/>
        </div>
    )
}
export default SignUpPage