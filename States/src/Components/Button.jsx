import { Component } from "react";

class Button extends Component{
    constructor(){
        super()
        this.state={
            name:"naresh",
            age:2,
            btnValue:"login",
            btnValue1:true  
        }
    }
    handleclicked=()=>{
        this.setState({btnValue:this.state.btnValue=="login"?"logout":"login",age:this.state.age+2})
    }
    handleclick=()=>{
        this.setState({btnValue:"logout",age:this.state.age+1})
    }
    handleclicking=()=>{
        this.setState({btnValue1:!this.state.btnValue1,age:this.state.age+2})
    }
    render(){
       const Decrement=()=>{
            this.setState({name:"naik"})
        }
        return (
            <>
            <button onClick={Decrement}>{this.state.name}</button>
            <button onClick={this.handleclick}>{this.state.btnValue}-{this.state.age}</button>
            <button onClick={this.handleclicking}>{this.state.btnValue1?"login":"logout"}</button>
            <button onClick={this.handleclicked}>{this.state.btnValue}</button>
            </>
        )
    }
}
export default Button