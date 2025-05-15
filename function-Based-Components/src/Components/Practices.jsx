import { useEffect, useState } from "react"

function Practices(){
    // const [count, setCount] = useState(0)
  // const [age, setAge] = useState(20)
  // const [add, setAdd] = useState(1)
  // const [input, setinput] = useState()
  // const [color, setColor] = useState()
  // const [name, setName] = useState(["naresh", "shiva"])
  // const [colors, setColors] = useState(["red", "blue"])
  // const HandleClick = () => {
  //   // setCount(count+1)
  //   setCount(count - 1)
  //   setAdd((prevValue) => prevValue + 1)
  //   setCount((prevValue) => prevValue + 2)
  //   // setCount((prevValue)=>prevValue+2)
  //   // setCount(()=>{return 2+3})
  //   setAge(age + 5)
// 
  // }
    const [count,setCount]=useState(()=>{
        console.log("third")
        return 0;
    })
    useEffect(()=>{
        // console.log("first",count)
        // return ()=>{console.log("secound",count)}
        const id=setInterval(()=>{
            console.log(count)
            setCount(prev=>prev+1)
        },1000)
        return ()=>clearInterval(id)
    },[count])
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
         {/* <h1>count:{count}</h1>
    <h1>Age:{age}</h1>
    <h1>add:{add}</h1>
    <button onClick={HandleClick}>Click</button>
    <p>input:{input}</p>
    <input type="text" onChange={(event)=>setinput(event.target.value)} /><br/>
    <h1 style={{color:color}}>color:{color}</h1>
    <input type="text" onChange={(e)=>setColor(e.target.value)}/>
    {name.map((ele,index)=>{
      return(
        <>
        <h2 style={{color:colors[index]}}>{ele}</h2>
        </>
      )
    })} */}
        </>
    )
}
export default Practices