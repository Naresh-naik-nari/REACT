import { Component } from "react";
import Form from "../Forms/Form";
import { SignUpData } from "../../../Costoms/src/Data/SignUpData";



class Forms extends Component{
    render(){
        const heading=Object.keys(SignUpData[0])
        return(
            <>
        <Form headings={heading} datasoure={SignUpData.fields}/>
            </>
        )
    }
}
export default Forms