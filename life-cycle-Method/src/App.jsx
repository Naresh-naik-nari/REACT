import { Component } from "react";
import ComponentDidMounts from "./Components/ComponentDidMounts";
import ComponeneDidUpdate from "./Components/ComponentDivUpdate";


class App extends Component{
  constructor(){
    super()
    this.state={
      counts:1,
      product:null
    }
  }
  HandleClick=()=>{
    this.setState({counts:this.state.counts+1})
  }
  render(){
    return(
      <>
      <ComponeneDidUpdate 
      counts={this.state.counts}
      product={this.state.product}
      HandleClick={this.HandleClick}
      />
      {/* <ComponentDidMounts/> */}
      </>
    )
  }
}
export default App
