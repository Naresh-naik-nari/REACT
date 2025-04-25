import { FormData } from "../Data/FormData"
const Login=()=>{
    const {logindata}=FormData
    return (
        <>
        <form>
            {logindata.fields.map((obj,index)=>{
                return (
                    <>
                    <label>{logindata.labels[index]} : </label>
                    <input type={obj.type} placeholder={obj.placeholder} /><br/>
                    </>
                )
            })}
        </form>
        </>
    )
}
export default Login