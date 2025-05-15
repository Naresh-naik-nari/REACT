function UseMemo(){
    const Hello=()=>{
        console.log("this is hello1")
    }
    const hello=Hello()
    console.log("hello2")
    return(
        <>
        <h1></h1>
        </>
    )
}
export default UseMemo