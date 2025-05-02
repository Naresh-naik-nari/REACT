import { Component } from "react";

class TypedColor extends Component{
    constructor(){
        super()
        this.state={
            color:""
        }
    }
    TypedColor=(event)=>{
        this.setState({color:event.target.value})
    }
    render(){
        return(
            <>
            <div style={{background:this.state.color,width:"200px",height:"200px"}}>type color:</div>
            <input type="text" placeholder="type colors..." onChange={this.TypedColor}/>
            </>
        )
    }
}
export default TypedColor