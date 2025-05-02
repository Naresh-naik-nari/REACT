import { Component } from "react";

class Form extends Component {
    render() {
        return (
            <>
                <form>
                    {this.props.headings.map((keys) => {
                        return (
                            <>
                                <label>{keys[0].toUpperCase() + keys.slice(1,)}</label>
                            </>
                        )
                    })}
                    {this.props.headings.map((obj) => {
                        console.log(obj)
                        return (
                            <input type="text" placeholder="Enter" />
                        )
                    })}
                </form>
            </>
        )
    }
}
export default Form