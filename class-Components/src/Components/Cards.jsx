import { Component } from "react";
import { products } from "../Cards/CardsData";
import Card from "../Cards/Card";

class Cards extends Component{
    render(){
        return(
            <>
           <Card product={products}/>
            </>
        )
    }
}
export default Cards