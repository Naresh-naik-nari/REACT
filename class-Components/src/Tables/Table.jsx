import { Component } from "react";

class Table extends Component{
    render(){
        return(
            <>
            <table border={2} cellSpacing={0}  width={1000}>
                <thead>
                    <tr>
                        {this.props.headings.map((head)=>{
                            return(
                                <th>{head[0].toUpperCase()+head.slice(1,)}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.datasoure.map((obj)=>{
                        return(
                            <tr>
                            {this.props.headings.map((ele)=>{
                                return(
                                    <>
                                    <td style={{textAlign:"center"}}>{obj[ele] || "-"}</td>
                                    </>
                                )
                            })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}
export default Table