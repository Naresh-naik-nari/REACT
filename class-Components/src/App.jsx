import { Component } from "react"

import Tables from "./Components/Tables"
import Forms from "./Components/forms"
import Cards from "./Components/Cards"

class App extends Component {
  Data = [{
    id: "1",
    name: "naresh",
    age: 30
  }, {
    id: "1",
    name: "shiva",
    age: 30
  }]
  render() {
    return (
      <>
      <Cards/>
      <Tables/>
      <Forms/>
      </>
    )
  }
}
export default App
