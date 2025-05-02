import { Component } from "react"

class ComponeneDidMount extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            Data:[]
        }
        console.log("constructoe")
    }
    HandleAdd=()=> {
        this.setState({ count: this.state.count + 1 })
    }
    fetchData=async()=>{
        const respounce = await fetch("https://fakestoreapi.com/products")
        const data=respounce.json()
        console.log(data)
        this.setState({Data:data})
    }
    componentDidMount() {
        // this.fetchData()
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>this.setState({Data:data}))
        console.log("componentDidmount")
    }
    render() {
        const HandleMult = () => {
            this.setState({ count: this.state.count * 10 })
        }
        // console.log(this.fetchData())
        console.log("render",this.state.Data)
        return (
            <>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.HandleAdd}>Add</button>
                <button onClick={()=>{this.setState({count:0})}}>rest</button>
                <button onClick={HandleMult}>Mult</button>
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Sub</button>
                {this.state.Data.length>0 && this.state.Data.map((ele)=>{
                    return<p>{ele.title}</p>
                })}
            </>
        )
    }
}
export default ComponeneDidMount