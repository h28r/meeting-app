import {  Table } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from "react";


export const Feedback = () => {
    
    const [feedback, setfeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
      }, []);
    
    const fetchFeedback = async() =>{
    try{
        const response = await axios(`http://localhost:4000/api/app/feedbacks`);
        console.log(response.data.feedbacks);
        setfeedback(response.data.feedbacks);
      }catch(e){
      }
    
    }
    return (
      <div className="m-5">
      <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Feedback ID</th>
                        <th>Email</th>
                        <th>Feedback</th>
                        <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                       {feedback.map( feedbacks => {
                           const {tnlId, feedbackId, emailId, feedback, createdAt} = feedbacks;
                           return(
                            <tr key={tnlId}>
                            <td>{feedbackId}</td>
                            <td>{emailId}</td>
                            <td>{feedback}</td>
                            <td>{createdAt}</td>
                            
                          </tr>
                           )
                       })}
                    </tbody>
                </Table>
                </div>
    )
}
