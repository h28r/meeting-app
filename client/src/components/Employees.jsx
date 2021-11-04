import {  Table } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from "react";


export const Employees = () => {
    
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees()
      }, []);
    
    const fetchEmployees = async() =>{
    try{
        const response = await axios(`http://localhost:4000/api/app/list`);
        console.log(response.data.employees);
        setEmployees(response.data.employees);
      }catch(e){
      }
    
    }
    return ( <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>tnl_id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Reporting Manaaget Email</th>
                        <th>Created At</th>
                        <th>Created By</th>
                        </tr>
                    </thead>
                    <tbody>
                       {employees.map( employee => {
                           const {tnl_id, name, email_id,designation,department,created_at,created_by,reporting_manager_email} =employee;
                           return(
                            <tr key={tnl_id}>
                            <td>{tnl_id}</td>
                            <td>{email_id}</td>
                            <td>{name}</td>
                            <td>{designation}</td>
                            <td>{department}</td>
                            <td>{reporting_manager_email}</td>
                            <td>{created_at}</td>
                            <td>{created_by}</td>
                            
                          </tr>
                           )
                       })}
                    </tbody>
                </Table>
    )
}
