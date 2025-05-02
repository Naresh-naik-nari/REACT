import { Component } from "react";
import Button from "./Components/Button";
import Child from "./Child";
import Counts from "./Components/Counts";

class App extends Component{
  render(){
    const btnValue="login"
    return(
      <>
      <Counts/>
      <Child btnValue={btnValue}/>
      <Button btnValue={btnValue}/>
      </>
    )
  }
}
export default App
