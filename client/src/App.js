
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar.js';
import Router from './Router.js';

function App() {
  return (
    
   <>
      <NavBar/>
      <Container>
     <Router/>
     </Container>
    </>
  );
}

export default App;
