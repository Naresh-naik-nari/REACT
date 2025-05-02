import { Component } from "react";

class NameColor extends Component{
    constructor(){
        super()
        this.state={
            name:["Naresh","venkat","suraj","Uday"],
            colors:["red","blue","green","yellow"]
        }
    }
    render(){
        return(
            <>
            {this.state.name.map((ele,index)=>{
                return(
                    <>
                    <h1 style={{color:this.state.colors[index]}}>{ele}</h1>
                    </>
                )
            })}
            </>
        )
    }
}
export default NameColor