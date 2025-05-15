import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { GetProductData } from "../Services/api";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
        GetProductData().then(data => setData(data));
    }, []);

    return (
        <>
            <table border={2} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((obj, index) => (
                            <tr key={obj.id}>
                                <td>{index + 1}</td>
                                <td>{obj.title}</td>
                                <td>{obj.category}</td>
                                <td>
                                    <Link to={`/products/${obj.id}`}><button>Details</button></Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>Data Not Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {data.length>0?(
                    data.map((obj)=>{
                        return(
                            <div style={{border:"2px solid black",width:"300px"}} onClick={()=>navigate(`/products/${obj.id}`)}>
                            <h3>Title: {obj.title}</h3>
                            <p>category:{obj.category}</p>
                            <button onClick={()=>navigate(`/products/${obj.id}`)}>More Details</button>
                            </div>
                        )
                    })
                ):(
                    <>Data no Found</>
                )}
            </div>
        </>
    );
};

export default HomePage;
