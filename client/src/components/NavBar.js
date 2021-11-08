
import{ Navbar,Nav,Container,Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
const NavBar = () =>{

return (
<div className="mb-5">
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="1 TO 1">One To One</Navbar.Brand>
    <Nav className="me-auto">

  <Link to="/"> <Button>  Employees</Button> </Link>

   <Link to="/meeting"><Button>  Meeting </Button></Link>

   <Link to="/feedback"> <Button>   Feedback</Button></Link>

<Link to="/actionItems"><Button>   ActionItems</Button> </Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
)

}

export default NavBar;