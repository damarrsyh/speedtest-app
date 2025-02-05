import { Navbar, Container } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="ms-3">📊 Data Speedtest</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
