import React from "react";
import EmployeeTable from "../../components/employee/EmployeeTable";

export default function Employees(props) {

    const data = [{
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    },
    {
        "employee": "Ankit Yadav",
        "designation": "Sales Representative",
        "country": "USA",
        "hireDate": "01/02/2021",
        "reportsTo": "Carson",
        "employeeId": 1
    }]

    return (
        <div id="employees">
            <h1>Employees</h1>
            <EmployeeTable data={data} />
        </div>
    )
}