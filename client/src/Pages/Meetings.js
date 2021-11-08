import { useState ,useEffect} from 'react';

import axios from 'axios';
import {  Table } from "react-bootstrap";

import NavBar from '../components/NavBar';

const Meetings = () =>{

 const [meeting ,setMeeting] = useState([]);
 
 useEffect(() => {
    fetchMeeting()
  }, []);


    const fetchMeeting = async()=>{

        const response = await axios(`http://localhost:4000/api/app/meetings`) 
        console.log(response.data)
        setMeeting(response.data)

        
    }


    return (
        <>
        <NavBar/>
        <div className="m-5">
           
        <Table striped bordered hover>
                      <thead>
                          <tr>
                          <th>Meetings ID</th>
                          <th>Created At</th>
                          <th>created By</th>
                          <th>Scheduled At</th>
                          <th>Scheduled By</th>
                          <th>Scheduled With</th>
                          <th>Link</th>
                          
                          </tr>
                      </thead>
                    
                       <tbody>
                         {meeting.map( meeting => {
                             const {meetingId,createdAt,createdBy,scheduledAt,scheduledBy,scheduledWith,link} =meeting;
                             return(
                              <tr key={meetingId}>
                                  <td>{meetingId}</td>
                              <td>{createdAt}</td>
                              <td>{createdBy}</td>
                              <td>{scheduledAt}</td>
                              <td>{scheduledBy}</td>
                              <td>{scheduledWith}</td>
                              <td>{link}</td>
                              
                            </tr>
                             )
                         })}
                      </tbody> 
                  </Table>
                  </div>
     </>
    );
}
export default Meetings;