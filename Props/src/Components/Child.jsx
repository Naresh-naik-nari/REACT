function Child(props){
    console.log(props.parent.grandparent.app)
    return (
        <>
        <p>{props.parent.grandparent.app}</p>
        <p>{props.parent.grandparent.age}</p>
        </>
    )
}

export default Child