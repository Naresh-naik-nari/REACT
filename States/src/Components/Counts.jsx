import { Component } from "react";

class Counts extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    heandleIncrement=()=>{
        if (this.state.count<20){
            this.setState({count:this.state.count+1})
        }
    }
    heandleDecrement=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
    render(){
        const headleReset=()=>{
            this.setState({count:0})
        }
        return(
            <>
            <h2>Count: {this.state.count}</h2>
            <button disabled={this.state.count>=20} onClick={this.heandleIncrement}>+</button>
            <button disabled={this.state.count==0} onClick={headleReset}>Reset</button>
            <button disabled={this.state.count<=0} onClick={this.heandleDecrement}>-</button>
            </>
        )
    }
}
export default Counts