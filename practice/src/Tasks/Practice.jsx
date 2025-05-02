import { Component } from "react";

class Practice extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            list: [],
            color: "",
            username: ["Naresh", "Shiva"],
            colorname: ["red", "blue"]
        }
    }
    HandleChange = (event) => {
        event.preventDefault()
        this.setState({ name: event.target.value })
    }
    HandleSubmit = (event) => {
        event.preventDefault()
        this.setState({ list: [...this.state.list, this.state.name] })
    }
    ColorChange = (event) => {
        this.setState({ color: event.target.value })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.username.map((ele, index) => {
                        return (
                            <>
                                <h1 style={{ color: this.state.colorname[index] }}>{ele}</h1>
                            </>
                        )
                    })}
                </div>
                <div style={{ background: this.state.color, width: "100px", height: "100px" }}>type color:</div>
                <input type="text" placeholder="type1 somthing..." onChange={this.ColorChange} />
                <h2>Type:{this.state.name}</h2>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="type">type:</label>
                    <input
                        type="text"
                        placeholder="type somthing..."
                        name="type"
                        id="type"
                        onChange={this.HandleChange} />
                    <button>Add</button>
                </form>
                <table border={2} cellSpacing={0} cellPadding={3} width={600}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((list, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{list}</td>
                                        <td>
                                            <button>Del</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
export default Practice