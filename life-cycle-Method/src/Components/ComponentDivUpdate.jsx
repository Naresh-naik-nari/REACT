import { Component } from "react";

class ComponeneDidUpdate extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            product: null,
            name: ""
        }
    }
    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
            .then((res) => res.json())
            .then((data) => this.setState({ product: data }))
    }
    HandleClick = () => {
        this.setState({ count: this.state.count + 1 })
        this.setState((prevState) => ({ count: prevState.count + 1 }))
        this.setState({name:"Hello"})
    }
    // baching 
    // HandleClick=()=>{5
    //     this.setState((prevState)=>({count:prevState.count+1}))
    //     this.setState((prevState)=>({count:prevState.count+1}))
    //     this.setState({name:"namerh"})
    // }

    componentDidUpdate(preProps, prevState) {
        if (prevState.count !== this.state.count) {
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
                .then((res) => res.json())
                .then((data) => this.setState({ product: data }))
        }
    }
    render() {
        console.log(this.state.product)
        return (
            <>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.HandleClick}>Add</button>
                {this.state.product && this.state.product.title}
                <h1>{this.state.name}</h1>
            </>
        )
    }
}
export default ComponeneDidUpdate