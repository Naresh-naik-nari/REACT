import { Component } from "react";

class Child extends Component{
    hello1=()=>{
        console.log("clicked",this.props)
    }
    render(){
        function hello(){
            console.log("clicked")
        }
        return(
            <>
            <button onClick={()=>hello()}>{this.props.btnValue}</button>
            <button onClick={this.hello1}>{this.props.btnValue}</button>
            </>
        )
    }
}
export default Child