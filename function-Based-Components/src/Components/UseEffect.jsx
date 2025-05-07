import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState({});

    console.log(product);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${count}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [count]);

    return (
        <>
            <div className="card" style={{ borderRadius: "20px", padding: "10px", boxShadow: "5px 2px 2px 5px gray", margin: "50px" }}>
                {product.images && (
                    <img src={product.images[0]} alt={product.title} style={{ width: "400px" }} />
                )}
                <h2>{product.title}</h2>
                <div>
                    <button onClick={() => setCount(count + 1)} style={{ background: "green", color: "white",margin:"10px" }}>Add</button>
                    <button onClick={() => setCount(1)} style={{ background: "red", color: "white",margin:"10px" }}>Reset</button>
                    <button onClick={() => setCount(count - 1)} style={{ background: "blue", color: "white",margin:"10px" }}>Sub</button>
                </div>
            </div>
        </>
    );
}

export default UseEffect;
