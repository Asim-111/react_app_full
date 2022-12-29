function Table({tableData}){
    return(
        <table className="table mx-auto" >
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;