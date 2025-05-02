import { Component } from "react";

class ComponeneDidUpdate extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            product: null
        }
    }
    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
            .then((res) => res.json())
            .then((data) => this.setState({ product: data }))
    }
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
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Add</button>
                {this.state.product && this.state.product.title}

            </>
        )
    }
}
export default ComponeneDidUpdate