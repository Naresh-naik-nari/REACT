import { FormData } from "../Data/FormData"
import "./css.css"
const Signup=()=>{
  const {signupdata}=FormData
    return (
        <div className="container">
        <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="image" />
        <form className="form">
            {signupdata.fields.map((obj,index)=>{
                return (
                    <div className="signup">
                    <label>{signupdata.labels[index].toUpperCase()+signupdata.labels[index].slice(8)} : </label><br/>
                    <input type={obj.type} placeholder={obj.placeholder} /><br/>
                    </div>
                )
            })}
            <button>Submit</button>
        </form>
        </div>
    )
}
export default Signup