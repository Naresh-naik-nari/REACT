const Table=({headings,dataSoure})=>{
    console.log(headings)
    return (
        <>
        <table border={2} cellSpacing={0} width={800}>
            <thead>
                <tr>
                    {headings.map((column)=>{
                        return (
                            <th>{column[0].toUpperCase()+column.slice(1,)}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {dataSoure.length>0?(   
                 <>
                 {dataSoure.map((obj)=>{
                    return (
                        <tr>
                            {headings.map((ele)=>{
                                return (
                                    <td style={{textAlign:"center"}}>{obj[ele] || "-"}</td>
                                )
                            })}
                        </tr>
                    )
                 })}
                 </>
                ):(
                    <p>Data not found</p>
                )}
            </tbody>
        </table>
        </>
    )
}
export default Table