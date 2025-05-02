import GrandParent from "./components/GrandParent"
import { FormData } from "../../Costoms/src/Data/FormData"
import TypedValue from "./Tasks/TypedValue"
import TypedColor from "./Tasks/TypedColor"
import NameColor from "./Tasks/NamesColor"
import CreateRead from "./Tasks/CreateRead"
import Practice from "./Tasks/Practice"

function App() {
const{logindata,signupdata}=FormData
const name="naresh"
  return (
    <>
    <Practice/> 
    {/* <CreateRead/> */}
    {/* <NameColor/> */}
    {/* <TypedColor/> */}
    {/* <TypedValue/> */}
    {/* <GrandParent user={name} ldata={logindata} sdata={signupdata}/> */}
    </>
  )
}

export default App
