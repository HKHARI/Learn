import React from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Allowance</th>
                <th>IsManager</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows =props.employeeData.map((row,index)=>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.salary}</td>
                <td>{row.allowance}</td>
                <td>{row.isManager.toString()}</td>
                <td>
                    <button onClick={()=> props.removeEmployee(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return(<tbody>{rows}</tbody>);
}

const Table = (props) => {
    const {employeeData, removeEmployee} = props;
    return(
        <table>
            <TableHeader/>
            <TableBody employeeData={employeeData} removeEmployee={removeEmployee}/>
        </table>
    )
}

export default Table;

