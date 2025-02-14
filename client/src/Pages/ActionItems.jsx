import axios from "axios";
import { useState , useEffect} from "react";
import { Container, Table } from "react-bootstrap";

function ActionItems() {
    const  [actionItems, setActionItems] = useState([])

    useEffect(() => {
       fetchActionItems()
    }, [])

    const fetchActionItems = async() =>{
        try{
            const response = await axios.get(`http://localhost:4000/api/app/actionItems`);
            setActionItems(response.data.actionItems)
        }catch(e){
            console.log(e)
        }
    }
    return (
    <Container>
    <Table striped bordered hover>
        <thead>
        <th>Action Item</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Created By</th>
        <th>Status</th>
        <th>Meeting Id</th>
        </thead>
        <tbody>
        {actionItems.map( actionItem =>{
            const { actionItemId ,emailId, createdAt, createdBy, status, meetingId} = actionItem
            return(
            <tr key={actionItemId}>
            <td>{actionItemId}</td>
            <td>{emailId}</td>
            <td>{createdAt}</td>
            <td>{createdBy}</td>
            <td>{status}</td>
            <td>{meetingId}</td>
            </tr>
           ) 
        })}
        </tbody>
    </Table>
    </Container> )
}
export default ActionItems