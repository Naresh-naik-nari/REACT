import { Component } from "react";
import "../css.css"

class Card extends Component{
    render(){
        return(<div className="container">
            {this.props.product.map((items)=>{
                console.log(items)
                return(
                    <div className="item">
                    <img src={items.image} alt="image" className="image" />
                    <p>{items.id}</p>
                    <p>{items.title}</p>
                    <p>{items.price}</p>
                    <p>{items.description}</p>
                    <p>{items.category}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}
export default Card