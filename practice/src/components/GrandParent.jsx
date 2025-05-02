import Parent from "./Parent"

const GrandParent=(props)=>{
    return (
        <>
        <Parent  dddata={props} />
        </>
    )
}
export default GrandParent