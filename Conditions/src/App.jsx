import CardPage from "./conditions/CardPage"
import { studentData } from "./conditions/DataPage"
import TablePage from "./conditions/TablePage"

function App() {
  const isLoggnedIn = False
  const arr = []
  const maincontainer = {


  }
  console.log(studentData)
  return (
    <>
      <div style={maincontainer}>
        {isLoggnedIn ? (
          <>
            <CardPage />
            <TablePage />
          </>
        ) : (
          <p>You have to login</p>
        )}
      </div>
      {isLoggnedIn ?
        <p>login successfully</p>
        :
        <p>login Failed</p>
      }
      <div>
        {arr.lenght > 0 ? (
          <>
            {arr.map((items, index) => {
              <>
                <p>{arr.name}</p>
                <p>{arr.age}</p>
              </>
            })}
          </>
        ) : (
          <>
            <p>Data not found</p>
          </>
        )}
      </div>
    </>
  )
}

export default App
