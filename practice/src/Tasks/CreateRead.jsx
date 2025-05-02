import { Component } from "react";

class CreateRead extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            list:[]
        }
    }
    HandleChange=(event)=>{
        event.preventDefault()
        this.setState({name:event.target.value})
    }
    HandleSubmit=(event)=>{
        event.preventDefault()
        this.setState({list:[...this.state.list,this.state.name]})
    }
    HandleDelete=()=>{
        this.setState({list:this.state.list==""})
    }
    render(){
        return(
            <>
            <h2>Type:{this.state.name}</h2>
            <form onSubmit={this.HandleSubmit}>
                <label htmlFor="type">type:</label>
                <input type="text" placeholder="type someyhing....." name="inputData" onChange={this.HandleChange} id="type"/>
                <button>Add</button>
            </form>
            <table border={2} cellSpacing={0} cellPadding={1} width={700}>
                <thead>
                    <tr>
                        <th>S no</th>
                        <th>Names</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.length?(
                       <>
                          {this.state.list.map((ele,index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{ele}</td>
                                    <td>
                                        <button onClick={this.HandleDelete}>delete</button>
                                    </td>
                                </tr>
                            )
                          })}
                        </>
                    ):(
                       <> Data Not Available</>
                    )}
                </tbody>
            </table>
            </>
        )
    }
}
export default CreateRead