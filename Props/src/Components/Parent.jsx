import Child from "./Child"
import GrandPrent from "./GrandPrent"

function Parent(props){
    return (
        <>
        <Child parent={props}/>
        
        </>
    )
}

export default Parent