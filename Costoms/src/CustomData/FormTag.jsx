
import Search from "./Search"
import "../Components/css.css"

const FormTag = ({headings,dataSoure}) => {
    console.log(headings)
     //{headings }
    return (
        <>
            <form action="#">
                <div className="form">
                    {headings.map((keys) => {
                        return (
                            <label>{keys[0].toUpperCase() + keys.slice(1,)}</label>
                        )
                    })}
                    {dataSoure.length>0?(
                        <>
                        {headings.map((obj)=>{
                            return (
                                <>
                               <Search type={"text"} placeholder={"Enter"}/>
                                </>
                            )
                        })}
                        </>
                    ):(
                        <p>Data not Found</p>
                    )}
                </div>
            </form>
        </> 
    )
}

export default FormTag