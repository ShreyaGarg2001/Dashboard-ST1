import React from "react";

export default function EmployeeTable(props) {
    const element = props.data.map((e) => {
        return (
            <tr>
                <td>{e.employee}</td>
                <td>{e.designation}</td>
                <td>{e.country}</td>
                <td>{e.hireDate}</td>
                <td>{e.reportsTo}</td>
                <td>{e.employeeId}</td>
            </tr>
        )
    })

    return (
        <div id="table--wrapper">
            <table id="employee--table" border="0px">
                <tr>
                    <th>Employee</th>
                    <th>Designation</th>
                    <th>Country</th>
                    <th>Hire Date</th>
                    <th>Reports To</th>
                    <th>Employee Id</th>
                </tr>
                {element}
            </table>
        </div>
    )
}