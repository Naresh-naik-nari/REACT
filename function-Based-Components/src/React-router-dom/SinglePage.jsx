import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetProductData } from "../Services/api"

function SinglePage() {
    const [count,setCount]=useState(0)
    const [data, setData] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        GetProductData().then((data) => {
            const matchedObj = data.find((obj) => obj.id == id)
            setData(matchedObj)
        })
    })
    return (
        <>
            <div style={{ borderRadius: "20px", padding: "10px", boxShadow: "5px 2px 2px 5px gray", margin: "50px", width: "600px" }}>
                <img src={data && data.image} alt="image" style={{ width: "400px", height: "400px" }} />
                <p>{data && data.id}</p>
                <p>{data && data.title}</p>
                <p>{data && data.price}</p>
                <p>{data && data.description}</p>
                <p>{data && data.category}</p>
            </div>
            <div>
                <button onClick={() => setCount(count + 1)} style={{ background: "green", color: "white", margin: "10px" }}
                    disabled={count == 0}>+</button>
                <button onClick={() => setCount(1)} style={{ background: "red", color: "white", margin: "10px" }}
                    disabled={count < 1}>Reset</button>
                <button onClick={() => setCount(count - 1)} style={{ background: "blue", color: "white", margin: "10px" }}>-</button>
            </div>
        </>
    )
}
export default SinglePage