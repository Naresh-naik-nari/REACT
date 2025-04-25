import FormTag from "../CustomData/FormTag"
import Headers from "../CustomData/Headers"


const LoginPage=()=>{
    const headings=Object.keys(LoginData[0])
    return (
        <div>
        <Headers heading="Login Page"/>
        <FormTag headings={headings} dataSoure={logindata.fields}/>
        </div>
    )
}
export default LoginPage