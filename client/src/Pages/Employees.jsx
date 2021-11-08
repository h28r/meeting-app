import {  Table } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from "react";

import NavBar from '../components/NavBar';

export const Employees = () => {
    
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees()
      }, []);
    
    const fetchEmployees = async() =>{
    try{
        const response = await axios(`http://localhost:4000/api/app/list`);
        setEmployees(response.data.employees);
      }catch(e){
      }
    
    }
    return (
      <>
      <NavBar/>
      <div className="m-5">
      <Table striped bordered hover>
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
                           const {tnlId, name, emailId,designation,department,createdAt,createdBy,reportingManagerEmail} =employee;
                           return(
                            <tr key={tnlId}>
                            <td>{tnlId}</td>
                            <td>{emailId}</td>
                            <td>{name}</td>
                            <td>{designation}</td>
                            <td>{department}</td>
                            <td>{reportingManagerEmail}</td>
                            <td>{createdAt}</td>
                            <td>{createdBy}</td>
                            
                          </tr>
                           )
                       })}
                    </tbody>
                </Table>
                </div>
                </>
    )
}
