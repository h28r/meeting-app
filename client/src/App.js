import './App.css';

import { Container } from 'react-bootstrap';

import { Employees } from './components/Employees';

function App() {
  return (
    <>
    <Container className="mt-5 ">
      <Employees/>
    </Container>
    </>
  );
}

export default App;
