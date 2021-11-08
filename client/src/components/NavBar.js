
import{ Navbar,Nav,Container} from "react-bootstrap";
const NavBar = () =>{

return (
<div className="mb-5">
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="1 TO 1">One To One</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#home">Employees</Nav.Link>
      <Nav.Link href="#home">Meeting</Nav.Link>
      <Nav.Link href="#features">feedback</Nav.Link>
      <Nav.Link href="#pricing">Action item</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
)

}

export default NavBar;