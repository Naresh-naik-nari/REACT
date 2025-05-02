import { Component } from "react";

class TypedValue extends Component{
    constructor(){
        super()
        this.state={
            text:""
        }
    }
    handlechange=(event)=>{
        console.log(event.target.value)
        this.setState({text:event.target.value})
    }
    render(){
        return(
            <>
            <h2>typed Value:{this.state.text}</h2>
            <input type="text" placeholder="somthing......" onChange={this.handlechange}/>
            </>
        )
    }
}
export default TypedValue
