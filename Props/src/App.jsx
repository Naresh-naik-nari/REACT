import GrandPrent from "./Components/GrandPrent"

function App() {
  const name="naresh"
  const age="56"
  const phone="1234"
  return (
    <div className="appcontainer">
   <GrandPrent 
   app={name}
   age={age}
   />
    </div>
  )
}

export default App
