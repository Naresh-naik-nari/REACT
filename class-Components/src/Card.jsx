// import { Component } from "react"

// class Card extends Component {
//     render() {
//         const arr = [{
//             id: 1,
//             productname: "product-1",
//             price: 123
//         },
//         {
//             id: 1,
//             productname: "product-2",
//             price: 123
//         }]
//         console.log(this.props)
//         return (
//             <>
//                 {arr.length > 0 ? (
//                     <>
//                         {arr.map((product) => {
//                             return (
//                                 <>
//                                     <p>{product.id}</p>
//                                     <p>{product.productname}</p>
//                                     <p>{product.price}</p>
//                                 </>
//                             )
//                         })}
//                         {this.props.data.map((obj) => {
//                             return (
//                                 <>
//                                     <p>{obj.id}</p>
//                                     <p>{obj.name}</p>
//                                     <p>{obj.age}</p>
//                                 </>
//                             )
//                         })}
//                     </>
//                 ) : (
//                     <p>No cards</p>
//                 )}

//             </>
//         )
//     }
// }
// export default Card