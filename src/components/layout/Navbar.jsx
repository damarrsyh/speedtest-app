import { Navbar, Container } from 'react-bootstrap';
import { FaChartLine } from 'react-icons/fa';

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <FaChartLine style={{marginRight: '10px', color: '#b31e1e'}}/>
          Speedtest Tracker
          </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
